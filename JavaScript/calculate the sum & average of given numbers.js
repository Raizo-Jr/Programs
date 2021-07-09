const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let total = 0;
for (let i = 0; i < values.length; i++) {
  total = total + values[i];
}
const avg = total / values.length;

console.log(`Total : ${total}\nAverage : ${avg}`);
