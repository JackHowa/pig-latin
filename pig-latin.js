function translatePigLatin(str) {
  const splitStr = str.split(""); // [ 'c', 'o', 'n', 's', 'o', 'n', 'a', 'n', 't' ]
  const consonantsRegex = /([b-df-hj-np-tv-z])/; // list all of the consonants range
  const firstConsonant = str.search(consonantsRegex); // 0 

  

  return firstConsonant;
}

const output = translatePigLatin("consonant");

console.log(output);
