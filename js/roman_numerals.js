const EQUIVALENCES = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

const romanNumerals = (num) => {
  if (!num) return '';
  let result = '', remainder = 0;
  const workingValue = findWorkingValue(num);
  const closest = findClosestEquivalence(workingValue);
  const subtraction = canBeSubtracted(workingValue, closest);

  if (subtraction) {
    result += subtraction.map(eq => EQUIVALENCES[eq]).join('');
    remainder = num - workingValue;
  } else {
    result += EQUIVALENCES[closest];
    remainder = num - closest;
  }

  return result + romanNumerals(remainder);
};

const findWorkingValue = (num) => {
  const size = num.toString().length;
  const times = parseInt('1' + '0'.repeat(size - 1), 10);
  return Math.floor(num / times) * times;
};

const findClosestEquivalence = (num) => {
  let closest = 1000;
  const magnitude = num.toString().length - 1;
  Object.keys(EQUIVALENCES).forEach((eq) => {
    const equivalence = parseInt(eq, 10);
    if (equivalence <= num) {
      closest = equivalence;
    } else if (equivalence - num <= Math.pow(10, magnitude)) {
      closest = equivalence;
    }
  });
  return closest;
};

const canBeSubtracted = (num, closest) => {
  let subtraction = null;
  Object.keys(EQUIVALENCES).forEach((eq) => {
    const equivalence = parseInt(eq, 10);
    if (equivalence !== closest && closest - equivalence === num) {
      subtraction = [equivalence, closest];
    }
  });
  return subtraction;
};

module.exports = {
  romanNumerals,
  canBeSubtracted,
  findClosestEquivalence,
  findWorkingValue,
};
