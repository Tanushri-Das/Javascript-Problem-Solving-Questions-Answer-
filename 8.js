// 8. const fruits = ["Apple", "Banana", "Orange"];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

const fruits = ["Apple", "Banana", "Orange"];
const fruitIndex = fruits.indexOf("Banana");
console.log(fruitIndex);
fruits[1] = "Mango";
console.log(fruits);

const removeFruit = fruits.pop();
console.log(fruits);
fruits.push("Watermelon");
console.log(fruits);
