class Bank{
    constructor(bank_name,location,account_no,ifsc,interest_rate){
        this.bank_name=bank_name;
        this.location=location;
        this.account_no=account_no;
        this.ifsc=ifsc;
        this.interest_rate=interest_rate;
    }
}
console.log(`create class using properties:`,"bank_name,location,account_no,ifsc,interest_rate");
console.log("============= Question-2 ==============");
let axis_bank=new Bank("Axis-Bank","Nashik",1284657899,"utib00003647","4%");
console.log(axis_bank);
let sbi_bank=new Bank("SBI-Bank","Ahmednagar",1284657899,"SBIN00003647","9%");
console.log(sbi_bank);
let icici_bank=new Bank("ICICI-Bank","Aurangabad",1284657899,"SBIN00003647","7%");
console.log(icici_bank);
let kotak_bank=new Bank("Kotak-Bank","Pune",1284657899,"SBIN00003647","3%");
console.log(kotak_bank);
let hdfc_bank=new Bank("HDFC-Bank","Akola",1284657899,"HDFC00003647","5%");
console.log(hdfc_bank);
let panjab_bank=new Bank("Panjab-Bank","Loni",1284657899,"PUNB00003647","6%");
console.log(panjab_bank);
console.log("============= Add all element in array ==============");
let array=[axis_bank,kotak_bank,hdfc_bank,sbi_bank,icici_bank,panjab_bank];
console.log(kotak_bank.bank_name,kotak_bank.location);
console.log(axis_bank.bank_name,axis_bank.location);
console.log(panjab_bank.bank_name,panjab_bank.location);
console.log(icici_bank.bank_name,icici_bank.location);
console.log(hdfc_bank.bank_name,hdfc_bank.location);
console.log(sbi_bank.bank_name,sbi_bank.location);
console.log("============= find the object: kotak_bank ===============");
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element.bank_name="kotak_bank") {
//         console.log(`${this.bank_name},${this.location},${this.account_no},${this.ifsc}`);
//     }
// }
for (const bank of array) {
    if (bank.bank_name=="kotak_bank") {
        console.log(`${bank.bank_name},${bank.location},${bank.account_no},${bank.ifsc}`);
    }
}


