

function LongestWord(sentence){
  let words = sentence.split(" ");
  // let sort = words.sort((a,b)=> a.length-b.length)
  // console.log(sort)
  // console.log(words)
  let max = 0
  for (let word of words){
    if (word.length > max){
      max = word.length
    }
  }
  console.log(max)

  let secondLongest = ""
  for (let word of words){
    if (max > word.length){
      secondLongest = word
    }
  }
  console.log(secondLongest)

  let count = 0;
  for(let word of words){
    if (word.length == max){
      count ++
    }
  }
  console.log(count)
let SamWord = []
for (let word of words){
  if (word.length == max){
    SamWord.push(word)
  }
}
console.log(SamWord)


}



let sen = "the sky is blue colour"
LongestWord(sen)