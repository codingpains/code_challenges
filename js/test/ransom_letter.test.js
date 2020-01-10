const ransomLetter = require('../ransom_letter');

describe('Ransom letter', () => {
  it('should be a function', () => {
    expect(ransomLetter).to.be.a('function');
  });

  it('should return false if letter is larger than newsPaper', () => {
    const newsPaper = 'hi bro';
    const letter = 'hi bro!';
    expect(ransomLetter(newsPaper, letter)).to.be.false;
  });

  it('should return false if no newsPaper is provided', () => {
    const letter = 'hi bro!';
    expect(ransomLetter(null, letter)).to.be.false;
  });

  it('should return true', () => {
    const newsPaper = 'Yo, hi bro! How ya doing?';
    const letter = 'hi bro!';
    expect(ransomLetter(newsPaper, letter)).to.be.true;
  });

  it('should return false', () => {
    const newsPaper = 'Yo, hi bro! How ya doing?';
    const letter = 'hamani bro!';
    expect(ransomLetter(newsPaper, letter)).to.be.false;
  });
});
