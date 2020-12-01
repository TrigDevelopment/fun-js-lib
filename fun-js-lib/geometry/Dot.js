import Rect from './Rect'

/**
 * Represents two-dimensional dot.
 * @property {number} x
 * @property {number} y
 */
export default class Dot {
  /**
   * @param {Object} args
   * @param {number} args.x
   * @param {number} args.y
   */
  constructor (args) {
    this.x = args.x
    this.y = args.y
  }
  /**
   * Creates Dot by array of coordinates and returns it.
   * @param {number[]} coordinates 
   */
  static byArray (coordinates) {
    return new Dot({
      x: coordinates[0],
      y: coordinates[1]
    })
  }
  /**
   * @param {Dot} vector
   */
  moved (vector) {
    return new Dot({
      x: this.x + (vector.x ?? 0),
      y: this.y + (vector.y ?? 0)
    })
  }
  /**
   * @param {Rect} rect
   */
  isIn (rect) {
    return this.x >= rect.x && this.x <= (rect.x + rect.w)
      && this.y >= rect.y && this.y <= (rect.y + rect.h)
  }
}