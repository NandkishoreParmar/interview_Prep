function groupAnagrams(words) {
  const map = {};
  for (let word of words) {
    let sorted = word.split('').sort().join('');
    map[sorted] = map[sorted] || [];
    map[sorted].push(word);
  }
  return Object.values(map);
}
let input = ["cat", "tac", "bat", "tab", "act"];
console.log(groupAnagrams(input))