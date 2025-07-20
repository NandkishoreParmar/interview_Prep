
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 45 },
  { name: "Charlie", age: 25 },
  { name: "Diana", age: 45 },
  { name: "Eva", age: 40 }
];

// 1. Extract all ages and remove duplicates
const uniqueAges = [...new Set(people.map(p => p.age))];

console.log(uniqueAges)
// 2. Sort in descending order
uniqueAges.sort((a, b) => b - a);
console.log(uniqueAges)
// 3. Get second largest age
const secondLargestAge = uniqueAges[0];

// 4. Find all people with that age
const result = people.filter(p => p.age === secondLargestAge);

console.log("Second Largest Age:", secondLargestAge);
console.log("Person(s) with Second Largest Age:", result);

let users = [
    { user: "A", age: 20 },
    { user: "B", age: 50 },
    { user: 'C', age: 20 },
    { user: "D", age: 20 },
];

const ans = users.reduce((acc,el)=>{
if (acc[el.age]!= null){
acc[el.age].push(el.user)
}else{
acc[el.age] = [el.user]
}
return acc
},{})

console.log(ans)

function flattenArray(arr){
  return arr.reduce((acc,val)=>{
   if (Array.isArray(val)){
    const flattened = flattenArray(val)
    return acc.concat(flattened)
   }else{
    return acc.concat(val)
   }
  },[])
}
const arr = [1,[2,3,[4,5],6,7],8]
console.log(flattenArray(arr))