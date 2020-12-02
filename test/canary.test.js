import { arrDeviationSum } from '../fun-js-lib/arr'

describe('arrDeviationSum', () => {
  it('on empty array is equal to 0', () => {
    expect(arrDeviationSum([])).toBe(0)
  })
})