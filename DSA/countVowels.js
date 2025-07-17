function countUniqueVowels(str) {
  const vowels = new Set();
  for (let ch of str.toLowerCase()) {
    if ("aeiou".includes(ch)) vowels.add(ch);
  }
  return vowels.size;
}

let strr = "The sky is blue"
console.log(countUniqueVowels(strr))