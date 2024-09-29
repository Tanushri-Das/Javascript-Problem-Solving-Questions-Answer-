// 14. Reverse string : I am a good girl To lrig doog a ma I

const reverseString = (str) => {
  let reverseText = "";
  for (let i = str.length - 1; i >= 0; i--) {
    const text = str[i];
    reverseText = reverseText + text;
  }
  return reverseText;
};
const string = "I am a good girl";
console.log(reverseString(string));
