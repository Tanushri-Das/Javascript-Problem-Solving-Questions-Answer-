// 10 : Calculate sum of all numbers of an array

const sumOfArrNumbers = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;
  }
  return sum;
};
const numbers = [1, 2, 3, 4, 5];
console.log(sumOfArrNumbers(numbers));
