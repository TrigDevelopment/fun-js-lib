import Vector from "./Vector";
import Rect from "./Rect";

/**
 * Represents two-dimensional dot.
 * @property {number} x
 * @property {number} y
 */
export default class Dot {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  /**
   * Creates Dot by array of coordinates and returns it.
   * @param {number[]} coordinates 
   */
  static byArray (coordinates) {
    return new Dot(coordinates[0], coordinates[1])
  }
  /**
   * Creates dot by dotLike, which must have x and y
   * @param {{x: number, y: number}} dotLike
   */
  static byDotLike (dotLike) {
    return new Dot(dotLike.x, dotLike.y)
  }
  /**
   * @param {Vector} vector
   */
  moved (vector) {
    return new Dot(
      this.x + vector.x,
      this.y + vector.y)
  }
  /**
   * 
   * @param {number} x 
   */
  xMoved (x) {
    return new Dot(
      this.x + x,
      this.y)
  }
  /**
   * 
   * @param {number} y 
   */
  yMoved (y) {
    return new Dot(
      this.x,
      this.y + y)
  }
  /**
   * @param {d3.Selection} to 
   */
  setPositionTo (to) {
    to
      .attr('x', this.x)
      .attr('y', this.y)
  }
  /**
   * @param {Rect} rect
   */
  isIn (rect) {
    return this.x >= rect.x && this.x <= (rect.x + rect.width)
      && this.y >= rect.y && this.y <= (rect.y + rect.height)
  }
}

/**
 * Returns maximum y value from dots array
 * @param {Dot[]} dots Dots array. Must not be empty
 */
export function getMaxY (dots) {
  let maxY = dots[0].y
  for (let dot of dots) {
    maxY = Math.max(maxY, dot.y)
  }
  return maxY
}
/**
 * Returns last x value from dots array
 * @param {Dot[]} dots Dots array
 */
export function getLastX (dots) {
  return dots[dots.length - 1].x
}