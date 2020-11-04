export default class Box {
  /**
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  /**
   * Creates and returns new box by boxLike object
   * @param {{width: number, height: number}} boxLike 
   */
  static byBoxLike (boxLike) {
    return new Box(boxLike.width, boxLike.height)
  }
  get h () {
    return this.height
  }
  get w () {
    return this.width
  }
  /**
   * Returns Box with sides scaled by [factor] 
   * @param {number} factor 
   */
  scaled (factor) {
    return new Box(
      this.width * factor,
      this.height * factor)
  }
}