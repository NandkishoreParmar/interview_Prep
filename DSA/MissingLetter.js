function findAlpha(str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let output = [];
  for (let i = 0; i < alpha.length; i++) {
    if (!str.includes(alpha[i])) {
      output.push(alpha[i]);
    }
  }
  console.log("using include", output);
}

findAlpha("gourav choudhary");

function withoutInclude(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let output = [];
  for (let i = 0; i < alphabet.length; i++) {
    let found = false;
    for (let j = 0; j < str.length; j++) {
      if (alphabet[i] == str[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      output.push(alphabet[i]);
    }
  }
  return output;
}

console.log(withoutInclude("gourav choudhary"));
