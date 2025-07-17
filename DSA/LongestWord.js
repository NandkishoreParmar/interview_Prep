
function LongestWord(sentence){
  let words = sentence.split(" ");
  // console.log(words)
  let max = 0
  let wo = ""
  for (let word of words){
    if (word.length > max){
      max = word.length
    }
  }
  console.log(max)
}

let sen = "the sky is blur colour"
LongestWord(sen)