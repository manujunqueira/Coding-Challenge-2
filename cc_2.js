// Task 1 - Calculate the Tip

let bill = 250;
let tip = (bill >= 50 && bill <= 300) ? (0.15 * bill) : (0.20 * bill);
// if bill >= 50 and <=300 is true, we use a 15% tip. If false, we use a 20% tip

console.log(tip);

