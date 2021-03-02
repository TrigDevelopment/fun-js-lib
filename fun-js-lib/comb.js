import { arrConcat, arrInc } from './arr'

/**
 * Returns all combinations of number from 0 to `n`,
 * for example,
 * `combNumber(3, 2) = [[0, 0], [1, 0], [2, 0], [0, 1], 
 *  [1, 1], [2, 1], [0, 2], [1, 2], [2, 2]]`
 * @param {number} n 
 * @param {number} length 
 * @returns {number[][]}
 */
const combNumber = (n, length) =>
  length > 0 ?
    arrConcat(arrInc(n).map(i =>
      combNumber(n, length - 1).map(prev => prev.concat([i]))
    )) :
    [[]]