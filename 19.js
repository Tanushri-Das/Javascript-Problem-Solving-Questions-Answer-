// 19. Given a list of strings, write a JS function that groups the strings into anagrams.
//  For example, given ["eat", "tea", "tan", "ate", "nat", "bat"], the function should return [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']].

const groupAnagrams = (strs) => {
  const map = new Map();
  strs.forEach((str) => {
    const sortedStr = str.split("").sort().join("");
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  });
  return Array.from(map.values());
};

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result);
