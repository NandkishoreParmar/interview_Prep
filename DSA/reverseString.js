// program to reverse a string
function rev(str){
  let reversed = "";
  for (let char of str){
      reversed = char + reversed;
  }
  return reversed;
}
console.log(rev("hello Nandkishore"));
function reverseString(str) {

  // empty string
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

// take input from the user

const result = reverseString("hello world");
console.log(result);

function reverseWords(str) {
  // split the string into words
  let words = str.split(" ");
  // reverse the array of words
  let reversedWords = words.reverse();
  // join the reversed array back into a string
  return reversedWords.join(" ");
}

console.log(reverseWords("I am a student")); // Output: "student a am I"


function reverseWordsInPlace(str) {
  // Split the string into words
  let words = str.split(" ");
  let left = 0;
  let right = words.length - 1;

  // Reverse the order of words in place
  while (left < right) {
      // Swap the words at left and right indices
      [words[left], words[right]] = [words[right], words[left]];
      left++;
      right--;
  }

  // Join the reversed array back into a string
  return words.join(" ");
}
const ans = reverseWordsInPlace("the sky is blue"); // Output: "student a am I"
console.log(ans); // Output: "blue is sky the"  