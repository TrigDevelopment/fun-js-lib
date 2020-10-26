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
 * Returns random element from given [arr]
 * @param {any[]} arr 
 */
export function randPick (arr) {
  return arr[randInt(0, arr.length - 1)]
}