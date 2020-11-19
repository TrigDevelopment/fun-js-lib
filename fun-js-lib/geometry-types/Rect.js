import Box from './Box'
import Dot from './Dot'
import Vector from './Vector'

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
    this.width = args.w
    this.height = args.h
  }
  /**
   * Creates new Rect by x, y and box
   * @param {number} x 
   * @param {number} y 
   * @param {Box} box 
   */
  static byXYAndBox (x, y, box) {
    return new Rect({ x, y, w: box.w, h: box.h })
  }
  /**
   * Creates new Rect by dot, width and height
   * @param {Dot} dot 
   * @param {number} width 
   * @param {number} height 
   */
  static byDotAndWH (dot, width, height) {
    return new Rect({ x: dot.x, y: dot.y, w: width, h: height })
  }
  /**
   * 
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
  get h () {
    return this.height
  }
  get w () {
    return this.width
  }
  /**
   * @param {Vector} vector
   */
  moved (vector) {
    return new Rect({
      x: this.x + vector.x,
      y: this.y + vector.y,
      w: this.width,
      h: this.height
    })
  }
  center () {
    return new Dot(this.x + this.w / 2, this.y + this.h / 2)
  }
}