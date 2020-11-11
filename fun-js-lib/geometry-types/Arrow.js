import Dot from './Dot'

/**
 * Represents two-dimensional fixed vector.
 * Has start dot.
 */
export default class Arrow {
  /**
   * @param {Dot} start
   * @param {Dot} end
   */
  constructor(start, end) {
    this.start = start
    this.end = end
  }
}