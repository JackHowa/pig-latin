function translatePigLatin(str) {
  const splitStr = str.split(""); // [ 'c', 'o', 'n', 's', 'o', 'n', 'a', 'n', 't' ]
  const vowelsRegex = /[aeiou]/gi;

  const firstConsonant = str.search(vowelsRegex);

  return firstConsonant;
}

const output = translatePigLatin("consonant");

console.log(output);
