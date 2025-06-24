const arr = [1,2,3,4,5,6];

const arrslice = arr.slice(1,3);  //it will take two parameter one is starting index and second take ending index but it will not include             slice doesnot modify orignal array 

// console.log(arrslice);

// console.log(arr);
const removedele = arr.splice(1,3,45,43,67,89,45);    //  it takes 3 par start, delete index , adding as a optional we have to add two or more data

console.log(removedele); 
console.log(arr);  // it modify original array