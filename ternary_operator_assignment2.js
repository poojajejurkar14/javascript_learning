// Write a normal function ‘maleMarriageEligibility()’ with 3 args gender, age and boyName. Function should return 
// msg as per the step 1.2 according to condition check.Please use the ternary operator for conditional check
// 1.1.If gender is Male and age >= 21 then
// 1.2.Hey ${ boyName } you are eligible for Marriage else Not eligible for Marriage
// 1.3.Invoke the function for values:
//     1.3.1.maleMarriageEligibility(“Male”, 25, “Billgates”);
// 1.3.2.maleMarriageEligibility(“Male”, 17, “Stew Jobs”);

function malemarriageEligibility(gender, age, name) {
    var result = gender == `male` && age >= 21
        ? `Hey ${name} you are eligible for marriage` : " You are not eligible for marriage";
    console.log(result);
}
malemarriageEligibility("male", 25, "billgates");
malemarriageEligibility("male", 17, "Stew jobs");

console.log("*************************************");

// Write a function ‘‘femaleMarriageEligibility()’ with 3 args gender, age and girlName. Function should return msg 
// as per the step 2.2 according to condition check. Please use the if block for conditional check
// 1.4. If gender is Female and age>=18 then only
// 1.5. Hey ${girlName} you are eligible for Marriage else not eligible for marriage
// 1.6. Call this function with values:
// 1.6.1. femaleMarriageEligibility(“Female”, 16, “Jenifer”);
// 1.6.2. femaleMarriageEligibility(“Female”, 27, “Malinda Gates”);
function femalemarriageEligibility( gender, age,girlName){
    var result= gender==`female`&& age>=18
    ?`Hey ${girlName} you are eligible for Marriage`:`You are not eligible for marriage`;
    console.log(result);
}
femalemarriageEligibility("female",16,"Jenifer");
femalemarriageEligibility("female",27,"Malinda Gates");
