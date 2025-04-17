function detectPalindrome(num) {
  let res = num;  // Store the original number in a variable
  let ans = 0;    // This will store the reversed number

  while (res > 0) {  // Loop until all digits are processed
      let lastdigit = res % 10;  // Extract the last digit
      res = Math.floor(res / 10);  // Remove the last digit using integer division
      ans = ans * 10 + lastdigit;  // Build the reversed number step by step
  }

  // Check if the reversed number is equal to the original number
  if (ans === num) {
      console.log("Yes, it's a palindrome");
  } else {
      console.log("No, it's not a palindrome");
  }
}

// Test cases
detectPalindrome(121);  // Output: Yes, it's a palindrome
detectPalindrome(123);  // Output: No, it's not a palindrome


function isPalindrome(num) {
  let numStr = num.toString(); // Convert the number to a string
 let left  = 0  
 let right = numStr.length-1; 

 while (left < right) {
  if (numStr[left] !== numStr[right]) {
      console.log("No, it's not a palindrome")
      return // If characters don't match, it's not a palindrome
  }
  left++; 
  right--;
  // return true; // It's a palindrome
}
console.log("Yes, it's a palindrome")
  // return false; // It's not a palindrome
}
isPalindrome("hello") // Output: false
isPalindrome("racecar") // Output: true