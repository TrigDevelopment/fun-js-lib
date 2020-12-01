import Box from './Box'
import Dot from './Dot'

/**
 * Represents rectangle
 */
export default class Rect {
  /**
   * @param {Object} args
   * @param {number} args.x
   * @param {number} args.y
   * @param {number} args.w Width
   * @param {number} args.h Height
   */
  constructor (args) {
    this.x = args.x
    this.y = args.y
    this.w = args.w
    this.h = args.h
  }
  /**
   * Creates new `Rect` using given `dot` and `box`
   * @param {Dot} dot 
   * @param {Box} box 
   */
  static byDotAndBox (dot, box) {
    return new Rect({ x: dot.x, y: dot.y, w: box.w, h: box.h })
  }
  /**
   * Logs this rect as string
   */
  log () {
    console.log(`x: ${this.x} y: ${this.y} w: ${this.w} h: ${this.h}`)
  }
  /**
   * @param {Dot} vector
   */
  moved (vector) {
    return new Rect({
      x: this.x + vector.x,
      y: this.y + vector.y,
      w: this.w,
      h: this.h
    })
  }
  center () {
    return new Dot({
      x: this.x + this.w / 2, 
      y: this.y + this.h / 2
    })
  }
}