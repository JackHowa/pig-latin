/*jshint esversion: 6 */

function translatePigLatin(str, times = 0) {
  // check for leading vowel
  const vowelRegex = /([aeiou])/;
  let firstVowelIndex = str.search(vowelRegex);

  // check for first time vowel 
  if (firstVowelIndex == 0 && times === 0) {
    return str + "way";
  }

  // recursion end case 
  if (firstVowelIndex === 0) {
    return str + "ay";
  }

  const consonantsRegex = /([b-df-hj-np-tv-z](.*))/; // list all of the consonants range
  let firstConsonantIndex = str.search(consonantsRegex); // 0
  let firstConsonant = str.substr(firstConsonantIndex, 1); // c

  // now I need to delete the first index
  let withoutFirstConsonant = str.slice(firstConsonantIndex + 1);

  let newStr = withoutFirstConsonant + firstConsonant; //"on"

  times += 1;

  return translatePigLatin(newStr, times);

}

// const singleCons = translatePigLatin("consonant");
// console.log("one vowel:");
// console.log(singleCons); // "aliforniacay"

// const leadingVowel = translatePigLatin("eight");
// console.log("empty");
// console.log(leadingVowel);


const doubleCons = translatePigLatin("glove");
console.log("double cons");
console.log(doubleCons);