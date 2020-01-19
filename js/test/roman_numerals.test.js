const {
  romanNumerals, canBeSubtracted, findClosestEquivalence, findWorkingValue,
} = require('../roman_numerals');

describe('findWorkingValue', () => {
  [[97, 90], [45, 40], [1991, 1000]].forEach((data) => {
    it(`should return ${data[1]} when ${data[0]}`, () => {
      expect(findWorkingValue(data[0])).to.equal(data[1]);
    });
  });
});

describe('findClosestEquivalence', () => {
  [
    [1, 1], [3, 1], [2, 1], [7, 5], [8, 5], [15, 10], [35, 10], [90, 100], [97, 100],
    [400, 500], [600, 500], [900, 1000], [800, 500]
  ].forEach((data) => {
    it(`should return ${data[1]} when ${data[0]}`, () => {
      expect(findClosestEquivalence(data[0])).to.equal(data[1]);
    });
  });
});

describe('canBeSubtracted', () => {
  [
    [8,5], [3, 1], [1,1], [7, 5], [15, 10], [35, 50]
  ].forEach((args) => {
    it('returns null if can not be', () => {
      expect(canBeSubtracted.call(this, args)).to.equal(null);
    });
  });

  it('should return array with 100, 10 if 90 given', () => {
    expect(canBeSubtracted(90, 100)).to.eql([10, 100]);
  });

  it('should return array with 1, 10 if 9 given', () => {
    expect(canBeSubtracted(9, 10)).to.eql([1, 10]);
  });

  it('should return 1, 5 if given 4', () => {
    expect(canBeSubtracted(4, 5)).to.eql([1, 5]);
  });
});

describe('romanNumerals', () => {
  it('should be a function', () => {
    expect(romanNumerals).to.be.a('function');
  });

  it('should return empty string when no number provided', () => {
    expect(romanNumerals()).to.equal('');
  });

  describe('correct values', () => {
    [{num: 1, res: 'I'}, {num: 2, res: 'II'}, {num: 3, res: 'III'}, {num:4, res: 'IV'}, {num: 5, res: 'V'},
    {num: 6, res: 'VI'}, {num: 7, res: 'VII'}, {num: 8, res: 'VIII'}, {num: 9, res: 'IX'},
    {num: 74, res: 'LXXIV'}, {num: 49, res: 'XLIX'}, {num: 100, res: 'C'},
    {num: 97, res: 'XCVII'}, {num: 1991, res: 'MCMXCI'}, {num: 2099, res: 'MMXCIX'},
    {num: 1917, res: 'MCMXVII'}, {num: 1888, res: 'MDCCCLXXXVIII'}, {num: 1514, res: 'MDXIV'},
    {num: 1096, res: 'MXCVI'}, {num: 1066, res: 'MLXVI'}, {num: 885, res: 'DCCCLXXXV'},
    {num: 34680, res: 'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMDCLXXX'},
    ].forEach(({num, res}) => {
      it(`should return ${res} when given ${num}`, () => {
        expect(romanNumerals(num)).to.equal(res);
      });
    });
  });
});
