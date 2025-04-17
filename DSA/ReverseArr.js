let arr = [1,23,5,4,3,2,1]; // Example array
let n = arr.length; // Length of the array
let newarr = []; // Initialize an empty array to store the reversed elements

for (let i=n-1; i>=0; i--) { // Loop through the array in reverse order
    // console.log(arr[i]); // Print each element
    newarr.push(arr[i]); // Push the element into the new array
}

console.log("newarr",newarr); // Print the new array with reversed elements

function reverseArray(arr,n) {
    let i = 0; // Initialize the starting index
    let j = n-1; // Initialize the ending index
    while (i < j) { // Loop until the two indices meet
        let temp = arr[i]; // Store the current element at index i
        arr[i] = arr[j]; // Swap the elements at indices i and j
        arr[j] = temp; // Assign the stored element to index j
        i++; // Move to the next index from the start
        j--; // Move to the previous index from the end
    }
    return arr; // Return the reversed array
}

reverseArray(arr,n); // Call the function to reverse the array
console.log("two pointer",arr); // Print the reversed array