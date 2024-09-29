// 21. Given a nested array with mixed data types:
// [1, [2, 3], [2, [4, 5, [6]]], 1]
// Write a JS function to extract unique numbers from this nested array into a flat array. 
// For example, the output should be [1, 2, 3, 4, 5, 6].

const extractUniqueNumbers = (arr) => {
  const flatArray = arr.flat(Infinity); // Flatten the nested array
  const uniqueNumberArr = [];

  // Iterate through the flattened array
  for (let i = 0; i < flatArray.length; i++) {
    const number = flatArray[i];
    // Check if the number is not already in uniqueNumberArr
    if (!uniqueNumberArr.includes(number)) {
      uniqueNumberArr.push(number);
    }
  }
  return uniqueNumberArr;
};

// Example usage:
const nestedArray = [1, [2, 3, [4, 5, [6, 3]]], 7, [8, [9, 1]], 2];
const result = extractUniqueNumbers(nestedArray);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
