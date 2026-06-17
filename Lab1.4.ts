let GrossIncome: number =50000;
let TaxRate: number =0.07;
let Total: number =GrossIncome*TaxRate;

console.log("--- Tax Calculation /report ---");
console.log("Gross Income: $%d",GrossIncome);
console.log("Tax Rate: 7%");
console.log("Tax Paid: $%d",GrossIncome*TaxRate);
console.log("Net Income after Tax: $%d",GrossIncome-Total);
console.log("-------------------------------");