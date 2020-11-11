import Box from './Box'
import Dot from './Dot'
import Vector from './Vector'

export default class Rect {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   */
  constructor (x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  /**
   * Creates new Rect by properties of args
   * @param {Object} args
   * @param {number} args.x
   * @param {number} args.y
   * @param {number} args.w
   * @param {number} args.h
   */
  static byNamed (args) {
    return new Rect(args.x, args.y, args.w, args.h)
  }
  /**
   * Creates new Rect by x, y and box
   * @param {number} x 
   * @param {number} y 
   * @param {Box} box 
   */
  static byXYAndBox (x, y, box) {
    return new Rect(x, y, box.w, box.h)
  }
  /**
   * Creates new Rect by dot, width and height
   * @param {Dot} dot 
   * @param {number} width 
   * @param {number} height 
   */
  static byDotAndWH (dot, width, height) {
    return new Rect(dot.x, dot.y, width, height)
  }
  /**
   * 
   * @param {Dot} dot 
   * @param {Box} box 
   */
  static byDotAndBox (dot, box) {
    return new Rect(dot.x, dot.y, box.w, box.h)
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
    return new Rect(
      this.x + vector.x,
      this.y + vector.y,
      this.width,
      this.height)
  }
  center () {
    return new Dot(this.x + this.w / 2, this.y + this.h / 2)
  }
}