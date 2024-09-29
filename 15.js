// 15. Reverse word : I am a good girl To girl good a am I

const reverseWord = (text) => {
  const splitText = text.split(" ");
  const reverseText = splitText.reverse();
  const joinText = reverseText.join(" ");
  return joinText;
};
const text = "I am a good girl";
console.log(reverseWord(text));
