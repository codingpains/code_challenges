const a_char = 97;

const fibonnacciString = (n) => {
  let res = '';
  for (let i = 1; i <= n; i++) {
    const times = getNthFibbonacci(i);
    res += String.fromCharCode(a_char + i - 1).repeat(times);
  };
  return res;
};


const getNthFibbonacci = (n) => {
  const Phi = 1.6180339;
  const _phi = -0.6180339;
  return Math.round((Math.pow(Phi, n) - Math.pow(_phi, n)) / 2.236067977);
};

module.exports = { fibonnacciString, getNthFibbonacci };
