// Task 1 - Calculate the Tip

let bill = 250;
let tip = (bill >= 50 && bill <= 300) ? (0.15 * bill) : (0.20 * bill);
// if bill >= 50 and <=300 is true, we use a 15% tip. If false, we use a 20% tip

console.log(tip);


// Task 2 - Output Details

let totalAmount = bill + tip; 
console.log(`The bill is $${bill}, the tip is $${tip}, and the total value is $${totalAmount}.`);
//if the bill is $200 it would be: The billis $200, the tip is $30, and the total value is $230.

