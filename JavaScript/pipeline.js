function Composed(pipeline){
  return function (num){
    for(let fun of pipeline){
      num = fun(num)
    }
    return num
  }
}

const pipeline = [
  (num) => num - 1,
  (num) => num * 10,
  (num) => `${num} as a string`,
];

const compose = Composed(pipeline);

console.log(compose(4));