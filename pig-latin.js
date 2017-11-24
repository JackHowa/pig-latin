/*jshint esversion: 6 */

function translatePigLatin(str) {
  // check for leading vowel
  const vowelRegex = /([aeiou])/;
  const firstVowelIndex = str.search(vowelRegex);

  if (firstVowelIndex == 0) {
    return str + "way";
  }

  // work on consonants
  let checkForConsonants = true;
  while (checkForConsonants === true) {
    const consonantsRegex = /([b-df-hj-np-tv-z](.*))/; // list all of the consonants range
    let firstConsonantIndex = str.search(consonantsRegex); // 0
    let firstConsonant = str.substr(firstConsonantIndex, 1); // c

    // now I need to delete the first index
    let withoutFirstConsonant = str.slice(firstConsonantIndex + 1);
  }

  // also I need to add it to the end with ay
  return withoutFirstConsonant + firstConsonant + "ay"; //"on"
}

const singleCons = translatePigLatin("consonant");
console.log("one vowel:");
console.log(singleCons); // "aliforniacay"

const leadingVowel = translatePigLatin("eight");
console.log("empty");
console.log(leadingVowel);