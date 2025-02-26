let howManyTime = 0;
let longestOne = 0;
let longestOneHowMany = 0;
let x;

for (let i = 1000000; i > 1; i--) {
  x = i;
  howManyTime = 1;
  while (x > 1) {
    x % 2 === 0 ? (x = x / 2) : (x = x * 3 + 1);
    howManyTime++;
  }
  if (howManyTime > longestOneHowMany) {
    longestOneHowMany = howManyTime;
    longestOne = i;
  }
}
console.log(
  `The longest chain was ${longestOneHowMany} and that number was ${longestOne}`
);
