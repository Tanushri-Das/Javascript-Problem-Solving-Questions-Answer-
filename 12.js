// 12. Array Methods
// Map, filter, find, join, sort, includes, concat, flat, uppercase and lowercase, split, slice

const users = [
  { id: 1, name: "Tanu", age: 20 },
  { id: 2, name: "Tama", age: 30 },
  { id: 3, name: "Noushin", age: 10 },
  { id: 4, name: "Arpa", age: 50 },
  { id: 5, name: "Sujon", age: 35 },
];
const userName = users.map((user) => user.name);
console.log(userName);

const filterAge = users.filter((user) => user.age > 10);
console.log(filterAge);

const findAge = users.find((user) => user.age > 10);
console.log(findAge);

const fruits = ["Apple", "Banana", "Orange"];
const joinFruits = fruits.join(" and ");
console.log(joinFruits);

const sortUser = users.sort((a, b) => a.age - b.age);
console.log(sortUser);

const checkInclued = fruits.includes("Papaya");
console.log(checkInclued);

const firstName = "Tanushri";
const lastName = "Das";
const fullName = firstName.concat(" ", lastName);
console.log(fullName);

const numbersArr = [
  1,
  [2, 3, [4, 5]],
  6,
  [7, [8], [9, [10, 30], [11, 12]]],
  13,
];
const flatNumbersArr = numbersArr.flat(Infinity);
console.log(flatNumbersArr);

const Name = "Tanushri";
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

const text = "Today is the sunny day";
const splitWord = text.split(" ");
console.log(splitWord[3]);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 11, 12, 13];
const sliceNumbers = numbers.slice(2, 5);
console.log(sliceNumbers);
