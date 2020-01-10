const { coloredText, coloredTextForConsole } = require('../colored_text');

describe('Colored text', () => {
  it('should be a function', () => {
    expect(coloredText).to.be.a('function');
  });

  it('should return correct string', () => {
    const string = 'Hi! Yo!';
    const colors = ['red', 'blue', 'yellow', 'green'];
    const expected = '(red)H(blue)i(yellow)! (green)Y(red)o(blue)!';
    const actual = coloredText(string, colors);
    expect(actual).to.equal(expected);
  });
});

describe('Colored text for console', () => {
  it('should be a function', () => {
    expect(coloredTextForConsole).to.be.a('function');
  });

  it('should return correct string', () => {
    const string = 'Hi! Yo!';
    const colors = ['#F00', '#00F', '#FDE834', '#0F0'];
    const expected = ['%cH%ci%c! %cY%co%c!', 'color:#F00', 'color:#00F', 'color:#FDE834', 'color:#0F0', 'color:#F00', 'color:#00F'];
    const actual = coloredTextForConsole(string, colors);
    console.log('Expected to look like:')
    console.log.apply(null, expected);
    console.log('What it looks like:')
    console.log.apply(null, actual);
    expect(actual).to.eql(expected);
  });
});
