function translatePigLatin(str) {
  const consonantsRegex = /([b-df-hj-np-tv-z])/; // list all of the consonants range
  const firstConsonantIndex = str.search(consonantsRegex); // 0
  const firstConsonant = str.substr(firstConsonantIndex, 1); // c

  // now I need to delete the first index 
  // also I need to add it to the end - perhaps push 



  return firstConsonant;
}

const output = translatePigLatin("consonant");

console.log(output);
