// Task 1 - Calculate the Tip

let bill = 250;
let tip = (bill >= 50 && bill <= 300) ? (0.15 * bill) : (0.20 * bill);
// if bill >= 50 and <=300 is true, we use a 15% tip. If false, we use a 20% tip

console.log(tip);


// Task 2 - Output Details

let totalAmount = bill + tip; 
console.log(`The bill is $${bill}, the tip is $${tip}, and the total value is $${totalAmount}.`);
//if the bill is $200 it would be: The billis $200, the tip is $30, and the total value is $230.


// Task 3 - Create a Function

function calculateTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    }
    else {return bill * 0.20}
} // Used if statement to make the conditional amount of tip based on the bill

let testBill = 100
let testTip = calculateTip(testBill);

console.log(`The bill is $${testBill} and the tip is $${testTip}.`) //The bill is $100 and the tip is $15.


// Task 4 - Utilize Arrays

let bills = [275, 40, 430, 125, 555, 44] // Array of both datasets
let tips = bills.map(bill => calculateTip(bill)); // calculates the function in every number in bills 
let totals = bills.map(bill => bill + calculateTip(bill)); // map array of total bill

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);

