console.log("************************ create object using literals ***************************");
let bank_sbi={
    name:"State Bank",
    bank_id:22,
    balance:250000,
    brach:"Rahata",
    contact_no:9881867094
}
console.table(bank_sbi);
console.log("******************* create object using literals with:street,city,pincode *******************");
let bank_location={
    street:"Ahmednagar",
    city:"Rahata",
    pincode:423107
}
console.table(bank_location);
console.log("***************** clone step-1 using object.assign() ******************");
let banksbi=Object.assign({},bank_sbi);
banksbi.name="state bank of maharastra";
//console.log(banksbi);
//console.log(bank_sbi);
console.log(Object.assign({},bank_sbi));
console.log("***************** clone step-1 using spread operator ******************");
let bank=JSON.parse(JSON.stringify(bank_sbi));
console.log(bank_sbi);
console.log("***************** clone step-2 using object.assign() ******************");
let banklocation=Object.assign({},bank_location);
console.log(Object.assign({},bank_location));
console.log("***************** clone step-2 using spread operator ******************");
let location=JSON.parse(JSON.stringify(bank_location));
console.log(JSON.parse(JSON.stringify(bank_location)));
console.log("************************ create object using literals:rate_of_interest ***************************");
let rate_of_interest={
    home_loan_interest:2000000,
    personal_loan_interest:100000,
    due_interest:500000,
}
console.table(rate_of_interest);
console.log("******************* merge object *****************");
let sbi_details=Object.assign({},bank_sbi,bank_location,rate_of_interest);
console.table(sbi_details);
