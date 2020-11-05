import Arrow from './geometry-types/Arrow'
import Dot from './geometry-types/Dot'
import Rect from './geometry-types/Rect'

/**
 * @param {CanvasRenderingContext2D} context 
 * @param {Rect} rect 
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
 * @param {string} style 
 * @param {() => any} f 
 */
export function canvasFillStyled (context, style, f) {
  let temp = context.fillStyle
  context.fillStyle = style
  f()
  context.fillStyle = temp
}

/**
 * @param {CanvasRenderingContext2D} context 
 * @param {Arrow} arrow 
 * @param {number} lineWidth 
 */
export function canvasLine (context, arrow, lineWidth) {
  context.strokeStyle = 'black'
  context.beginPath()
  context.moveTo(arrow.start.x, arrow.start.y)
  context.lineTo(arrow.end.x, arrow.end.y)
  context.lineWidth = lineWidth
  context.stroke()
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
 */
export function canvasTextWidth (context, text) {
  return context.measureText(text).width
}