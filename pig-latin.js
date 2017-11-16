function translatePigLatin(str) {
  const vowelRegex = /([aeiou])/;
  const firstVowelIndex = str.search(vowelRegex);

  if (firstVowelIndex == 0) {
    return str + "way";
  }

  const consonantsRegex = /([b-df-hj-np-tv-z](.*))/; // list all of the consonants range

  const firstConsonantIndex = str.search(consonantsRegex); // 0
  console.log(firstConsonantIndex);
  const firstConsonant = str.substr(firstConsonantIndex, 1); // c

  // now I need to delete the first index
  const withoutFirstConsonant = str.slice(firstConsonantIndex + 1);

  // also I need to add it to the end with ay
  return withoutFirstConsonant + firstConsonant + "ay"; //"on"
}

const singleCons = translatePigLatin("consonant");
console.log("one vowel:");
console.log(singleCons); // "aliforniacay"

const noCons = translatePigLatin("eight");
console.log("empty");
console.log(noCons); //
