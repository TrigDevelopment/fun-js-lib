import Vector from './Vector'

/**
 * Represents two-dimensional fixed vector.
 * Has start dot.
 * @property {number} x
 * @property {number} y
 */
export default class Arrow {
  /**
   * @param {number} startX
   * @param {number} startY
   * @param {number} endX
   * @param {number} endY
   */
  constructor(startX, startY, endX, endY) {
    this.startX = startX
    this.startY = startY
    this.endX = endX
    this.endY = endY
  }
  /**
   * @param {Vector} freeVector
   */
  moved (freeVector) {
    return new Vector(
      this.startX + freeVector.x,
      this.startX + freeVector.y)
  }
}