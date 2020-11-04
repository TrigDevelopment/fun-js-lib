import { zipWith } from 'ramda';

/**
 * Pads `arr` to length `len` using `padding` element to fill.
 * Padding is placed on left of array.
 * @template T
 * @param {T[]} arr 
 * @param {number} len 
 * @param {T} padding 
 */
export function padLeft (arr, len, padding) {
  return Array(len - arr.length).fill(padding)
    .concat(arr)
}

/**
 * Pads `arr` to length `len` using `padding` element to fill
 * Padding is placed on right of array.
 * @template T
 * @param {T[]} arr 
 * @param {number} len 
 * @param {T} padding 
 */
export function padRight (arr, len, padding) {
  return arr.concat(Array(len - arr.length).fill(padding))
}

/**
 * Removes and returns first element of `arr`
 * @param {any[]} arr 
 */
export function arrPopFront (arr) {
  let first = arr[0]
  for (let i = 0; i < arr.length - 1; ++i) {
    arr[i] = arr[i + 1]
  }
  arr.length--
  return first
}

/**
 * @param {any[]} arr 
 */
export function arrNEmpty (arr) {
  return arr.length > 0
}

/**
 * Zips two arrays with +
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 */
export const arrPlus = (arr1, arr2) =>
  zipWith((x, y) => x + y, arr1, arr2)

/**
 * Returns true iff `arr` is empty
 * @param {any[]} arr 
 */
export function arrEmpty (arr) {
  return !arrNEmpty(arr)
}

/**
 * Returns arr with repeating el
 * @template T
 * @param {T} el 
 * @param {number} n 
 * @returns {T[]}
 */
export function repeat (el, n) {
  return Array(n).fill(el)
}

/**
 * @param {any[]} arr 
 */
export function empty (arr) {
  return arr.length === 0
}

/**
 * @param {number} n 
 */
export function emptyArrays (n) {
  let arrs = []
  for (let i = 0; i < n; ++i) {
    arrs.push([])
  }
  return arrs
}

/**
 * Returns [0,1,2,...,n-1]
 * @param {number} n 
 */
export function increasing (n) {
  let arr = []
  for (var i = 0; i < n; ++i) {
    arr.push(i)
  }
  return arr
}

/**
 * Swaps two elements of array with indexes [i1] and [i2]
 * @param {any[]} arr 
 * @param {number} i1 
 * @param {number} i2 
 */
export function arrSwap (arr, i1, i2) {
  let temp = arr[i1]
  arr[i1] = arr[i2]
  arr[i2] = temp
}

/**
 * Removes all elements from given `arr` that are `=== el`
 * @template T
 * @param {T[]} arr 
 * @param {T} el 
 */
export function arrRemoveEl (arr, el) {
  arrRemoveIf(arr, e => e === el)
}

/**
 * Removes element with given `i`
 * @param {any[]} arr 
 * @param {number} i
 */
export function arrRemoveI (arr, i) {
  arr.splice(i, 1)
}

/**
 * Returns sum of `f(x)` on every element of `arr`
 * @template T
 * @param {T[]} arr 
 * @param {(element: T) => number} f
 */
export function arrSumF (arr, f) {
  return arr.reduce(
    (acc, el) => acc + f(el), 0)
}

/**
 * Returns sum `arr` elements
 * @param {number[]} arr 
 */
export function arrSum (arr) {
  return arrSumF(arr, x => x)
}

/**
 * @template T
 * @param {T[]} arr 
 * @param {(element: T) => number} f 
 */
export function arrMaxF (arr, f) {
  return arr.reduce(
    (acc, el) => Math.max(acc, f(el)), 0)
}

/**
 * Returns true iff array has element
 * @template T
 * @param {T[]} arr 
 * @param {T} el 
 */
export function arrHas (arr, el) {
  return arr.find(e => e === el) !== undefined
}

/**
 * Returns last element of [arr] for which pred is true. \
 * If not found, returns null
 * @template T
 * @param {T[]} arr 
 * @param {(el: T) => boolean} pred 
 */
export function findLast (arr, pred) {
  for (let i = arr.length - 1; i >= 0; --i) {
    if (pred(arr[i])) {
      return arr[i]
    }
  }
  return null
}

/**
 * Returns last index of [arr] for which pred is true. \
 * If not found, returns null
 * @template T
 * @param {T[]} arr 
 * @param {(el: T) => boolean} pred 
 */
export function findLastI (arr, pred) {
  for (let i = arr.length - 1; i >= 0; --i) {
    if (pred(arr[i])) {
      return i
    }
  }
  return null
}
/**
 * Returns number of pred elements
 * @template T
 * @param {T[]} arr 
 * @param {(el: T) => boolean} pred 
 */
export function arrCount (arr, pred) {
  let n = 0
  for (let i = arr.length - 1; i >= 0; --i) {
    if (pred(arr[i])) {
      ++n
    }
  }
  return n
}
/**
 * @template T
 * @param {T[]} arr 
 */
export function getLast (arr) {
  return arr[arr.length - 1]
}
/**
 * Removes elements from `arr` that are `pred`
 * @template T
 * @param {T[]} arr 
 * @param {(el: T) => boolean} pred 
 */
export function arrRemoveIf (arr, pred) {
  for (let i = arr.length - 1; i >= 0; --i) {
    if (pred(arr[i])) {
      arr.splice(i, 1)
    }
  }
}

/**
 * @template T
 * @param {T[]} arr 
 * @param {T} el 
 * @param {number} i 
 */
export const arrInsert = (arr, el, i) =>
  arr.splice(i, 0, el)

/**
 * @template T
 * @param {T[]} arr 
 */
export function arrLast (arr) {
  return arr[arr.length - 1]
}
/**
 * Returns true iff [arr] is sorted
 * @param {any[]} arr 
 */
export function arrIsSorted (arr) {
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i - 1] > arr[i]) {
      return false
    }
  }
  return true
}

/**
 * @param {number[]} arr 
 */
export function arrMean (arr) {
  return arrSum(arr) / arr.length
}

/**
 * Returns sum of deviations from mean value
 * @param {number[]} arr 
 */
export function arrDeviationSum (arr) {
  let mean = arrMean(arr)
  return arrSumF(arr, x => Math.abs(x - mean))
}

/**
 * @template T
 * @param {T[]} arr 
 * @param {(el: T) => boolean} pred 
 */
export function arrAll (arr, pred) {
  let b = true
  arr.forEach(x => {
    if (!pred(x)) {
      b = false
    }
  })
  return b
}

/**
 * Appends `what` array to `to` array
 * @template T
 * @param {T[]} to 
 * @param {T[]} what 
 */
export function arrAppend (to, what) {
  what.forEach(el => to.push(el))
}

/**
 * Returns [0,1,2,...,n-1]
 * @param {number} n 
 */
export function arrInc (n) {
  let arr = []
  for (let i = 0; i < n; ++i) {
    arr.push(i)
  }
  return arr
}