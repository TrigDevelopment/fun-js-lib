import { increasing } from './fun'

/**
 * @param {number} min
 * @param {number} max
 */
export function randInt (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

/**
 * @param {number} min
 * @param {number} max
 * @param {number} len
 */
export function randIntArr (min, max, len) {
  let arr = []
  for (let i = 0; i < len; ++i) {
    arr.push(randInt(min, max))
  }
  return arr
}

/**
 * @param {number} min 
 * @param {number} max 
 * @param {number} size 
 */
export function randIntSquareMatrix (min, max, size) {
  return increasing(size)
    .map(_ => randIntArr(min, max, size))
}

/**
 * Returns random element from given `arr` and its index
 * @param {any[]} arr 
 */
export function randPickI (arr) {
  let i = randInt(0, arr.length - 1)
  let el = arr[i]
  return { i, el }
}

/**
 * Returns random element from given `arr`
 * @param {any[]} arr 
 */
export function randPick (arr) {
  return randPickI(arr).el
}