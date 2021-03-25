/**
 * 
 * @param {CanvasRenderingContext2D} context 
 * @param {string} text 
 * @param {number} x 
 * @param {number} y 
 * @param {number} width 
 */
export function canvasTextBoundedJustifiedString (context, text, x, y, width) {
  const maxSpaceSize = 6 // Multiplier for max space size. If greater then no justificatoin applied
  const minSpaceSize = 0.5 // Multiplier for minimum space size

  var words, wordsWidth, count, spaces, spaceWidth, adjSpace, renderer, i, textAlign, useSize, totalWidth;
  textAlign = context.textAlign; // get current align settings
  context.textAlign = "left";
  wordsWidth = 0;
  words = text.split(" ").map(word => {
    var w = context.measureText(word).width;
    wordsWidth += w;
    return {
      width: w,
      word: word,
    };
  });
  // count = num words, spaces = number spaces, spaceWidth normal space size
  // adjSpace new space size >= min size. useSize Resulting space size used to render
  count = words.length;
  spaces = count - 1;
  spaceWidth = context.measureText(" ").width;
  adjSpace = Math.max(spaceWidth * minSpaceSize, (width - wordsWidth) / spaces);
  useSize = adjSpace > spaceWidth * maxSpaceSize ? spaceWidth : adjSpace;
  totalWidth = wordsWidth + useSize * spaces
  renderer = context.fillText.bind(context)
  switch (textAlign) {
    case "right":
      x -= totalWidth;
      break;
    case "end":
      x += width - totalWidth;
      break;
    case "center": // intentional fall through to default
      x -= totalWidth / 2;
    // eslint-disable-next-line no-fallthrough
    default:
  }
  if (useSize === spaceWidth) { // if space size unchanged
    renderer(text, x, y);
  } else {
    for (i = 0; i < count; i += 1) {
      renderer(words[i].word, x, y);
      x += words[i].width;
      x += useSize;
    }
  }
  context.textAlign = textAlign;
}