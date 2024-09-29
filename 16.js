// 16. Find all positive numbers

const findPositiveNumber = (num) => {
  let posiveNumbersArr = [];
  for (let i = 0; i < num.length; i++) {
    const number = num[i];
    if (number > 0) {
      posiveNumbersArr.push(number);
    }
  }
  return posiveNumbersArr;
};
const numbers = [1, -5, 2, 3, -1, 4, 6, -8, 9];
console.log(findPositiveNumber(numbers));
