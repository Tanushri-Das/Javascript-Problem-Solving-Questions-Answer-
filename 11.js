// 11: sum of odd numbers of an array

const sumOfOddNumbersArr = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 !== 0) {
      sum = sum + number;
    }
  }
  return sum;
};
const numbers = [1, 2, 3, 4, 5];
console.log(sumOfOddNumbersArr(numbers));
