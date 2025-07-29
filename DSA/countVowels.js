function countUniqueVowels1(str) {
  const vowels = new Set();
  for (let ch of str.toLowerCase()) {
    if ("aeiou".includes(ch)) vowels.add(ch);
  }
  return vowels.size;
}

let strr = "The sky is blue"
console.log(countUniqueVowels1(strr))

function countUniqueVowels2(str) {
  const vowels = 'aeiou';
  // const chars = str.toLowerCase().split('');/
  const uniqueVowels = [];   // t h e s k y

  for (let ch of str) {   // let ch of chars
  
    let found = false
    for (let v of vowels){
        if (ch == v){
          found = true
          break
        }
    }
    if (found && !uniqueVowels.includes(ch)){
      uniqueVowels.push(ch)
    }
  }

  return uniqueVowels;
}

console.log(countUniqueVowels2(strr)); // Output: 3

function countUniqueVowels3(str) {
  const vowels = 'aeiou';
  // const chars = str.toLowerCase().split('');
  const uniqueVowels = [];

  for (let ch of str) {
    if (vowels.includes(ch) && !uniqueVowels.includes(ch)) {
      uniqueVowels.push(ch);
    }
  }

  return uniqueVowels.length;
}

console.log(countUniqueVowels3(strr)); // Output: 3
