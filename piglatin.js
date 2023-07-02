const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

 const pigLatin = (word) => {
  const lowerWord = word.toLowerCase().trim();
  const firstLetter = lowerWord[0];
  const isVowel = ['a', 'e', 'i', 'o', 'u'].includes(firstLetter);

  if (isVowel) {
    return `${lowerWord}yay`;
  } else {
    let prefix = '';
    let suffix = lowerWord;
    while (CONSONANTS.includes(suffix[0])) {
      prefix += suffix[0];
      suffix = suffix.substring(1);
    }
    return `${suffix}${prefix}ay`;
  }
}

module.exports = pigLatin;
