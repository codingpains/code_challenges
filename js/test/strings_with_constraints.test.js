const possibleStrings = require('../possible_strings');
describe('possibleStrings', () => {
  it('returns 3 for 1', () => {
    expect(possibleStrings(1)).to.equal(3);
  });

  it('returns 8 for 2', () => {
    expect(possibleStrings(2)).to.equal(8);
  });

  it('returns 19 for 3', () => {
    expect(possibleStrings(3)).to.equal(19);
  });

  it('returns 39 for 4', () => {
    expect(possibleStrings(4)).to.equal(39);
  });

  it('returns 71 for 5', () => {
    expect(possibleStrings(5)).to.equal(71);
  });
});
