let GrossIncome: number =50000;
let TaxRate: number =0.07;
let TaxPaid: number =GrossIncome*TaxRate;
let NetIncomeafterTax: number =GrossIncome-TaxPaid; 

console.log("--- Tax Calculation /report ---");
console.log("Gross Income: $%d",GrossIncome);
console.log("Tax Rate: 7%");
console.log("Tax Paid: $%d",TaxPaid);
console.log("Net Income after Tax: $%d",NetIncomeafterTax);
console.log("-------------------------------");