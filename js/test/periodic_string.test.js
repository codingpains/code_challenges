const isPeriodic = require('../periodic_string');

describe('Check Periodic String', () => {
  const runPatternTest = (pattern, times) => {
    const res = isPeriodic(pattern.repeat(times));
    expect(res.pattern).to.equal(pattern);
    expect(res.times).to.equal(times);
  };

  it('should be a function' , () => {
    expect(isPeriodic).to.be.a('function');
  });

  it('should return null if not periodic', () => {
    expect(isPeriodic('nothing')).to.be.null;
  });

  it('should return null if not periodic with super long input', () => {
    const input = 'a5454--00opo0909kjhkjhnmshjdjksaquus'.repeat(123672) + '43ababa';
    const res = isPeriodic(input);
    expect(res).to.be.null;
  });

  it('should return pattern=ab times=3', () => {
    runPatternTest('ab', 3);
  });

  it('should return pattern=abx times=3', () => {
    runPatternTest('abx', 3);
  });

  it('should return pattern=abxa times=4', () => {
    runPatternTest('abxa', 4);
  });

  it('should return pattern=perro cruel times=19', () => {
    runPatternTest('perro cruel', 19);
  });

  it('should return pattern=perro cruel times=14', () => {
    runPatternTest('perro cruel', 14);
  });

  it('should return pattern=a times=144', () => {
    runPatternTest('a', 144);
  });
});
