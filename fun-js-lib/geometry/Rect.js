import Box from './Box'
import Dot from './Dot'

/**
 * Represents rectangle. Rectangle is positioned box,
 * i.e. box and it's position
 */
export default class Rect {
  /**
   * @param {Object} args
   * @param {Dot} args.dot
   * @param {Box} args.box
   */
  constructor (args) {
    this.dot = args.dot
    this.box = args.box
  }
  /**
   * @param {Object} args
   * @param {number} args.x
   * @param {number} args.y
   * @param {number} args.w
   * @param {number} args.h
   */
  static plain (args) {
    return new Rect({
      dot: new Dot({
        x: args.x,
        y: args.y
      }),
      box: new Box({
        w: args.w,
        h: args.h
      })
    })
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
      dot: this.dot.moved(vector),
      box: this.box.copy()
    })
  }
  center () {
    return new Dot({
      x: this.x + this.w / 2,
      y: this.y + this.h / 2
    })
  }
  get x () {
    return this.dot.x
  }
  get y () {
    return this.dot.y
  }
  get w () {
    return this.box.w
  }
  get h () {
    return this.box.h
  }
}