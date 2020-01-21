const { fibonnacciString, getNthFibbonacci } = require('../fibonnacci_string');

describe('getNthFibbonacci', () => {
  [[1,1], [2,1], [3, 2], [4, 3], [5, 5], [6, 8], [7, 13], [8, 21]].forEach((data) => {
    it(`should return ${data[1]} when asked for ${data[0]}th`, () => {
      expect(getNthFibbonacci(data[0])).to.equal(data[1]);
    });
  });
});

describe('fibonnacciString', () => {
  [[1, 'a'],[2, 'ab'], [3, 'abcc'], [4, 'abccddd'], [5, 'abccdddeeeee']].forEach((data) => {
    it(`should return ${data[1]} when ${data[0]} is given`, () => {
      expect(fibonnacciString(data[0])).to.equal(data[1]);
    });
  });
});
