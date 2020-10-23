/**type containing width and height */
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
  /**
   * Creates and returns new box bounding rect of element
   * @param {d3.Selection} element 
   */
  static byElement (element) {
    const b = element.node().getBoundingClientRect()
    return this.byBoxLike(b)
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
  /**
   * @param {d3.Selection} to 
   */
  setSizesTo (to) {
    to
      .attr('width', this.w)
      .attr('height', this.h)
  }
}