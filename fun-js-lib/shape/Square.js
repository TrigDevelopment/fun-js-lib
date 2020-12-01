import Vector from "./Vector";

/**
 * @property {number} x
 * @property {number} y
 * @property {number} side
 */
export default class Square {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} side
   */
  constructor(x, y, side) {
    this.x = x
    this.y = y
    this.side = side
  }
  /**
   * @param {Vector} vector
   */
  moved (vector) {
    return new Square(
      this.x + vector.x,
      this.y + vector.y,
      this.side)
  }
}