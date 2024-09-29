// 13. Find smallest number , Find largest number
const findSmallestNumber = (num) => {
  let smallNumber = num[0];
  for (let i = 0; i < num.length; i++) {
    const number = num[i];
    if (number < smallNumber) {
      smallNumber = number;
    }
  }
  return smallNumber;
};
const numbers = [5, 8, 10, 20, -1, 30];
console.log(findSmallestNumber(numbers));

const findLargestNumber = (num) => {
  let largeNumber = num[0];
  for (let i = 0; i < num.length; i++) {
    const number = num[i];
    if (number > largeNumber) {
      largeNumber = number;
    }
  }
  return largeNumber;
};

const numbersArr = [5, 8, 10, 20, 50, 30];
console.log(findLargestNumber(numbersArr));
