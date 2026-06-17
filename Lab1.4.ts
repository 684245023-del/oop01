let GrossIncome: number =50000;
let TaxRate: number =0.07;
let TaxPaid: number = 3500;

console.log("--- Tax Calculation /report ---");
console.log("Gross Income: $%d",GrossIncome);
console.log("Tax Rate: %d%",TaxRate);
console.log("Tax Paid: $%d",GrossIncome*TaxRate);
console.log("Net Income after Tax: $%d",GrossIncome-TaxPaid);
console.log("-------------------------------");