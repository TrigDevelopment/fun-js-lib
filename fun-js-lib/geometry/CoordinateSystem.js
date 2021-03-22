/**
 * Represents coordinate system
 */
export default class CoordinateSystem {
  /**
   * @param {import('./Dot')} oDot
   * @param {import('./Dot')} basisVectors
   */
  constructor(oDot, basisVectors) {
    /** Start dot of coordinate system */
    this.oDot = oDot
    this.basisVectors = basisVectors
  }
}