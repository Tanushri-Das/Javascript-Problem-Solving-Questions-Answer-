// 4. Find the Average of Elements in an Array

const getNumbersOfAverage = (numbers) => {
  let sum = 0;
  let numbersLength = numbers.length;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;
  }
  let average = sum / numbersLength;
  return average;
};
const numbers = [1, 2, 3, 4, 5];
console.log(getNumbersOfAverage(numbers));