// 6. ['1','2','foo','4','bar','foo','7','8','foo','bar','11','foo','13','14','foobar']

let result = [];
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    result.push("foobar");
  } else if (i % 3 === 0) {
    result.push("foo");
  } else if (i % 5 === 0) {
    result.push("bar");
  } else {
    result.push(i.toString());
  }
}
console.log(result);
