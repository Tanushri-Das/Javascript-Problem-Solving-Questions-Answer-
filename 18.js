// 18. Remove duplicate

const removeDuplicate = (num) => {
  let uniqueNumber = [];
  for (let i = 0; i < num.length; i++) {
    const number = num[i];
    if (!uniqueNumber.includes(number)) {
      uniqueNumber.push(number);
    }
  }
  return uniqueNumber;
};
const numbers = [1, 2, 3, 5, 4, 2, 1, 4, 5, 3];
console.log(removeDuplicate(numbers));
