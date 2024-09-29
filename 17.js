// 17. Array, Object Destructuring , Spread Operator 

const numbers = [1, 2, 3];
const [num1, num2, num3] = numbers;
console.log(num1, num2, num3);

const userInfo = {
  name: "Tanu",
  age: 24,
  address: "Dhaka",
};
const { name, age, address } = userInfo;
console.log(name, age, address);

const number1 = [1, 2, 3];
const numbersArr = [...number1, 4, 5];
console.log(numbersArr);
