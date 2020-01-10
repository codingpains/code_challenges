const coloredText = (str, colors) => {
  let strPtr = 0;
  let colorsPtr = 0;
  let result = '';

  while (strPtr < str.length) {
    const char = str[strPtr];

    if (char !== ' ') {
      result = result + `(${colors[colorsPtr]})`;
      colorsPtr = colorsPtr === colors.length - 1 ? 0 : colorsPtr + 1;
    }

    result = result + char;
    strPtr++;
  };

  return result;
};

const coloredTextForConsole = (str, colors) => {
  let strPtr = 0;
  let colorsPtr = 0;
  let resultingString = '';
  const result = [];

  while (strPtr < str.length) {
    const char = str[strPtr];

    if (char !== ' ') {
      resultingString = resultingString + '%c';
      result.push('color:' + colors[colorsPtr]);
      colorsPtr = colorsPtr === colors.length - 1 ? 0 : colorsPtr + 1;
    }

    resultingString = resultingString + char;
    strPtr++;
  };
  result.unshift(resultingString);
  return result;
};


module.exports = {
  coloredText,
  coloredTextForConsole,
};
