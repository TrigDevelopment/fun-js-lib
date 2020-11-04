/**
 * Represents two-dimensional free vector.
 * Has no start dot.
 * @property {number} x
 * @property {number} y
 */
export default class Vector {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  /**
   * @param {number} length
   * @param {number} angle In radians
   */
  static createByLengthAngle (length, angle) {
    return new Vector(
      length * Math.cos(angle),
      -length * Math.sin(angle))
  }
  /**
   * @param {Vector} freeVector
   */
  moved (freeVector) {
    return new Vector(
      this.x + freeVector.x,
      this.y + freeVector.y)
  }
  /**
   * @param {number} multiplier
   */
  scaled (multiplier) {
    return new Vector(
      this.x * multiplier,
      this.y * multiplier)
  }
}