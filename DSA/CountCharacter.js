function countCharacters(str) {
  let charCount = {}; // Object to store character counts
  for (let char of str) { 
      if (charCount[char]) {
          charCount[char]++;  // Increase count if character exists
      } else {
          charCount[char] = 1; // Set to 1 if character appears for the first time
      }
  }
  return charCount;
}

// Example Cases
console.log(countCharacters("llohello")); 
// Output: { h: 1, e: 1, l: 2, o: 1 }
console.log(countCharacters("aabbbcc")); 
// Output: { a: 2, b: 3, c: 2 }

let charCount = countCharacters("aaabbbcccdef");
let outcome = "";
let duplicateRemove = "";
for (let key in charCount){
    outcome += `${key} => ${charCount[key]}, `
    duplicateRemove += key
}

console.log(outcome);
console.log(duplicateRemove);