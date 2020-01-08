const isPeriodic = (input) => {
  const possibleReps = [];
  for (let i=input.length; i > 1; i--) {
    if (input.length % i === 0) possibleReps.push(i);
  }

  if (possibleReps.length === 0) return null;
  for (let i = 0; i < possibleReps.length; i++) {
    const pattern = input.substring(0, input.length / possibleReps[i]);
    if (pattern.repeat(possibleReps[i]) === input) return { pattern, times: possibleReps[i] };
  }
  return null;
};

module.exports = isPeriodic;
