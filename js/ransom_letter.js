const ransomLetter = (newsPaper, letter) => {
  if (!newsPaper || newsPaper.length < letter.length) return false;
  const charMap = {};
  let total = 0;

  for (let i = 0; i < letter.length - 1; i++) {
    charMap[letter[i]] = charMap[letter[i]] ? charMap[letter[i]] - 1 : -1;
    total--;
  }

  for (let i=0; i < newsPaper.length -1; i++) {
    const char = newsPaper[i];
    if (charMap[char]) {
      charMap[char]++;
      total++;
    }
    if (total >= 0) return true;
  }
  return false;
};


module.exports = ransomLetter;
