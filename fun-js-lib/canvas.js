import { arrMaxF } from './arr'
import Dot from './geometry/Dot'
import { strsEmpty } from './str'
import { canvasTextBoundedJustifiedString } from './justified'
import { htmlBody, htmlCanvas } from './html'
import Rect from './geometry/Rect'

/**
 * @param {HTMLCanvasElement} canvas 
 */
export const canvasContext = canvas =>
  canvas.getContext('2d')

/**
 * Creates, appends to body and returns canvas that is maximized to
 * full screen. Changes <html> and <body> margins to 0 to
 * enable canvas be fullscreen.
 * Used for canvas-only applications
 */
export function canvasFullscreen () {
  let canvas = htmlCanvas()
  htmlBody().style.overflow = 'hidden'
  document.documentElement.style.margin = '0'
  htmlBody().style.margin = '0'
  canvas.width = document.body.clientWidth
  canvas.height = document.body.clientHeight
  htmlBody().append(canvas)
  return canvas
}

/**
 * Resizes canvas to fit window. Use with `htmlOnResize`
 * @param {HTMLCanvasElement} canvas
 */
export function canvasRefreshFullscreen (canvas) {
  canvas.width = document.body.clientWidth
  canvas.height = document.body.clientHeight
}

/**
 * Returns `Rect` of full canvas
 * @param {HTMLCanvasElement} canvas 
 */
export const canvasGetRect = canvas =>
  Rect.plain({
    x: 0,
    y: 0,
    w: canvas.width,
    h: canvas.height
  })

/**
 * Fills `rect` on canvas
 * @param {CanvasRenderingContext2D} context 
 * @param {import('./geometry/Rect').default} rect 
 */
export function canvasRect (context, rect) {
  context.fillRect(rect.x, rect.y, rect.w, rect.h)
}

/**
 * Fills `rect` on canvas
 * @param {CanvasRenderingContext2D} context 
 * @param {import('./geometry/Rect').default} rect 
 * @param {string} style
 */
export function canvasRectStyled (context, rect, style) {
  canvasFillStyled(context, style, () => {
    context.fillRect(rect.x, rect.y, rect.w, rect.h)
  })
}

/**
 * Draws frame on canvas
 * @param {CanvasRenderingContext2D} context 
 * @param {import('./geometry/Rect').default} rect 
 * @param {number} lineWidth 
 */
export function canvasFrame (context, rect, lineWidth) {
  context.fillRect(rect.x, rect.y, rect.w, rect.h)
  canvasFillStyled(context, 'white', () =>
    context.fillRect(
      rect.x + lineWidth,
      rect.y + lineWidth,
      rect.w - 2 * lineWidth,
      rect.h - 2 * lineWidth))
}

/**
 * Changes `context` fill style to `style`, calls `f`, then reverts context fill style
 * @param {CanvasRenderingContext2D} context 
 * @param {string | CanvasGradient | CanvasPattern} style 
 * @param {() => any} f 
 */
export function canvasFillStyled (context, style, f) {
  let temp = context.fillStyle
  context.fillStyle = style
  f()
  context.fillStyle = temp
}

/**
 * Changes `context` stroke style to `style`, calls `f`, 
 * then reverts context stroke style
 * @param {CanvasRenderingContext2D} context 
 * @param {string | CanvasGradient | CanvasPattern} style 
 * @param {() => any} f 
 */
export function canvasStrokeStyled (context, style, f) {
  let temp = context.strokeStyle
  context.strokeStyle = style
  f()
  context.strokeStyle = temp
}

/**
 * @param {Object} args
 * @param {CanvasRenderingContext2D} args.context 
 * @param {import('./geometry/Arrow').default} args.arrow 
 * @param {number} [args.lineWidth]
 * @param {string} [args.style]
 */
export function canvasLine (args) {
  canvasStrokeStyled(args.context, args.style ?? args.context.strokeStyle, () => {
    args.context.beginPath()
    args.context.moveTo(args.arrow.start.x, args.arrow.start.y)
    args.context.lineTo(args.arrow.end.x, args.arrow.end.y)
    args.context.lineWidth = args.lineWidth ?? 1
    args.context.stroke()
  })
}

/**
 * @param {CanvasRenderingContext2D} context 
 * @param {string} text 
 * @param {Dot} position 
 */
export function canvasText (context, text, position) {
  context.fillText(text, position.x, position.y)
}

/**
 * @param {CanvasRenderingContext2D} context 
 * @param {string} text 
 * @param {Dot} position 
 * @param {string} font 
 */
export function canvasTextFonted (context, text, position, font) {
  canvasFonted(context, font, () => {
    canvasText(context, text, position)
  })
}

/**
 * @type {Map<string, number>}
 */
let textWidthMap = new Map()

/**
 * @param {CanvasRenderingContext2D} context 
 * @param {string} text 
 */
export function canvasTextWidth (context, text) {
  const maxTextLengthToMemoize = 20
  const maxMapSize = 1000

  // If text is small, memoize its width for future use
  if (text.length <= maxTextLengthToMemoize) {
    const key = context.font + ': ' + text
    if (textWidthMap.has(key)) {
      return textWidthMap.get(key)
    } else if (textWidthMap.size < maxMapSize) {
      const width = context.measureText(text).width
      textWidthMap.set(key, width)
      return width
    }
  }

  return context.measureText(text).width
}

/**
 * @param {CanvasRenderingContext2D} context 
 * @param {string} text 
 * @param {string} font 
 */
export function canvasTextWidthFonted (context, text, font) {
  let width = 0
  canvasFonted(context, font, () => {
    width = canvasTextWidth(context, text)
  })
  return width
}

/**
 * Fills `text` in center of `rect`. `TextMetrics.fontBoundingBoxDescent` and
 * `TextMetrics.fontBoundingBoxAscent` are still experimental, so we cannot
 * use them to determine text height.
 * @param {CanvasRenderingContext2D} context 
 * @param {string} text 
 * @param {import('./geometry/Rect').default} rect 
 * @param {number} textHeight Text height in pixels
 */
export function canvasTextCentered (context, text, rect, textHeight) {
  let textW = canvasTextWidth(context, text)
  let position = new Dot({
    x: rect.x + rect.w / 2 - textW / 2,
    y: rect.y + rect.h / 2 + textHeight / 2
  })
  canvasText(context, text, position)
}

/**
 * Using `maxW` as maximum row width, splits `text` by spaces so that
 * strings can fit in these rows. If `text` is an empty string,
 * array with one empty string is returned
 * @param {CanvasRenderingContext2D} context 
 * @param {string} text 
 * @param {number} maxW 
 */
export function canvasSplitBounded (context, text, maxW) {
  let words = text.split(' ')
  let w = 0
  let lines = strsEmpty()
  let line = strsEmpty()
  words.forEach(word => {
    let wordW = canvasTextWidth(context, word)
    w += wordW + canvasTextWidth(context, ' ')
    if (w > maxW) {
      if (line.length !== 0) {
        lines.push(line.join(' '))
      }
      line = [word]
      w = wordW
    } else {
      line.push(word)
    }
  })
  lines.push(line.join(' '))
  return lines
}

/**
 * Splits `text` into lines by spaces and draws it into `rect` with
 * given `lineInterval`. Note that `rect.h` is not used and text can
 * be drawn out of `rect`. Also if one word is too long to fit into line,
 * it can break right line of `rect`
 * @param {CanvasRenderingContext2D} context 
 * @param {string} text 
 * @param {import('./geometry/Rect').default} rect
 * @param {number} lineInterval 
 */
export const canvasTextBounded = (context, text, rect, lineInterval) => {
  let lines = canvasSplitBounded(context, text, rect.w)
  lines.forEach((line, i) => {
    context.fillText(line, rect.x, rect.y + (i + 1) * lineInterval)
  })
}

/**
 * As `canvasTextBounded`, but text is justified (words are spaced evenly)
 * @param {CanvasRenderingContext2D} context 
 * @param {string} text 
 * @param {import('./geometry/Rect').default} rect
 * @param {number} lineInterval 
 */
export function canvasTextBoundedJustified (context, text, rect, lineInterval) {
  let lines = canvasSplitBounded(context, text, rect.w)
  lines.forEach((line, i) => {
    const x = rect.x
    const y = rect.y + (i + 1) * lineInterval
    const width = rect.w
    canvasTextBoundedJustifiedString(context, line, x, y, width)
  })
}

/**
 * Returns true iff `text` can fit onto `maxNLines` number of lines
 * constrained by `maxWidth` drawn with given `font`.
 * The text is splitted into strings by `splitBounded`.
 * @param {Object} args
 * @param {CanvasRenderingContext2D} args.context
 * @param {string} args.text
 * @param {string} args.font
 * @param {number} args.maxNLines
 * @param {number} args.maxWidth
 */
export function canvasCanTextFit (args) {
  let maxWordW = 0
  let nLines = 0
  canvasFonted(args.context, args.font, () => {
    maxWordW = canvasMaxWordWidth(args.context, args.text)
    nLines = canvasSplitBounded(args.context, args.text, args.maxWidth).length
  })
  return maxWordW <= args.maxWidth && nLines <= args.maxNLines
}

/**
 * Changes context font, calls `f`, then reverts context font
 * @param {CanvasRenderingContext2D} context 
 * @param {string} font 
 * @param {() => any} f 
 */
export const canvasFonted = (context, font, f) => {
  let temp = context.font
  context.font = font
  f()
  context.font = temp
}

/**
 * Returns width of most wide word from `text`.
 * Text is being split by space
 * @param {CanvasRenderingContext2D} context 
 * @param {string} text 
 */
export function canvasMaxWordWidth (context, text) {
  let words = text.split(' ')
  return arrMaxF(words, word => canvasTextWidth(context, word))
}