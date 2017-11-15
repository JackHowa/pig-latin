function translatePigLatin(str) {
  const splitStr = str.split(""); // [ 'c', 'o', 'n', 's', 'o', 'n', 'a', 'n', 't' ]

  // need to make the match non-greedy 
  // via https://stackoverflow.com/questions/2503413/regular-expression-to-stop-at-first-match

  // this is a string method match though 
  // and returns an array
  const firstConsonant = str.match();
  return splitStr;
}

const output = translatePigLatin("consonant");

console.log(output);