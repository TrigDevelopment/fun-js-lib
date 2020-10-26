/**
 * returns [0,1,2,...,n-1]
 * @param {number} n 
 */
export function increasing (n) {
  let arr = []
  for (var i = 0; i < n; ++i) {
    arr.push(i)
  }
  return arr
}