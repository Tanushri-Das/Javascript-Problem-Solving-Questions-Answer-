// 5. Check if an Array Contains a Specific Value

const checkContainsSpecificValue = (numbers, valueToCheck) => {
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number === valueToCheck) {
      return true;
    }
  }
  return false;
};
const numbers = [1, 2, 3, 4, 5];
const valueToCheck = 8;
console.log(checkContainsSpecificValue(numbers, valueToCheck));
