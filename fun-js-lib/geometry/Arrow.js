import Dot from './Dot'

/**
 * Represents two-dimensional fixed vector.
 * Has start dot.
 */
export default class Arrow {
  /**
   * @param {Object} args
   * @param {Dot} args.start
   * @param {Dot} args.end
   */
  constructor (args) {
    this.start = args.start
    this.end = args.end
  }
  /**
   * Creates new horizontal `Arrow`
   * @param {Object} args 
   * @param {number} args.xStart 
   * @param {number} args.xEnd 
   * @param {number} args.y 
   */
  static horizontal (args) {
    return new Arrow({
      start: new Dot({
        x: args.xStart,
        y: args.y
      }),
      end: new Dot({
        x: args.xEnd,
        y: args.y
      })
    })
  }
  /**
   * Returns new `Arrow` moved by `dot`
   * @param {Dot} dot 
   */
  moved (dot) {
    return new Arrow({
      start: this.start.moved(dot),
      end: this.end.moved(dot)
    })
  }
  /**
   * Returns new `Arrow` with start moved by `dot`
   * @param {Dot} dot 
   */
  movedStart (dot) {
    return new Arrow({
      start: this.start.moved(dot),
      end: this.end.copy()
    })
  }
}