
function Reverse(name){
  let words = name.split(" ")
 let left = 0
 let right = words.length-1
 while (left < right){
  [words[left],words[right]] = [words[right],words[left]]
  left ++
  right--
 }
 return words.join(" ")
}
let name1 = "the blue is sky"
console.log(Reverse(name1))

