// 3 : print 1-20 Odd numbers using loop , print 1-20 even numbers using loop

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log("Odd", i);
  }
}
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log("Even", i);
    }
  }