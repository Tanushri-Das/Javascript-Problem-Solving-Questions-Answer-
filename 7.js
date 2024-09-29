// 7. Write a function called make_avg() which will take an three integers and return the average of those values

const make_avg = (...numbers) => {
  const total = numbers.reduce((acc, num) => acc + num, 0);
  const average=total / numbers.length;
  return average;
};
console.log(make_avg(5, 5, 5));
