import Dot from "./Dot";
import Vector from "./Vector";

/**
 * Represents coordinate system
 * @property {Dot} oDot Start of the system
 * @property {Vector[]} basisVectors
 */
export default class CoordinateSystem {
  /**
   * @param {Dot} oDot
   * @param {Vector[]} basisVectors Link to basisVectors
   */
  constructor(oDot, basisVectors) {
    this.oDot = oDot
    this.basisVectors = basisVectors
  }
  /**
   * Uses coordinates to return dot from the system in coordinates of basis system.
   * For example, (0, 0): this.oDot
   * @param {number} x
   * @param {number} y
   */
  dot (x, y) {
    let renamedForInnerFunctionArguments = arguments
    /**
     * @param {Dot} previous
     * @param {Vector} current
     * @param {number} i
    */
    function move (previous, current, i) {
      return previous.moved(
        current.scaled(renamedForInnerFunctionArguments[i]))
    }
    return this.basisVectors.reduce(move, this.oDot)
  }
}