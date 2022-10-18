var my_result=0/0;
console.log(my_result);
console.log(typeof my_result);
console.log();

var myName="pooja";
var myAge="22";
console.log( myAge,typeof myAge);
console.log(myName,typeof myName);

var myAgeinNumber=+myAge;
console.log( myAgeinNumber, typeof myAgeinNumber);

var myNamestring=+myName;
console.log(myNamestring, typeof myNamestring);

var operand1=+"100";
var operand2=+"200";
console.log(operand1+operand2);
console.log(operand1==100);

console.log("========== implicit conversion ============");
console.log(4-true);//4-1=3
console.log(5+true);//5+1=6
console.log(4-false);//4-0=4

var operand2=200;
console.log(operand2 , typeof operand2);
var operandstring=operand2.toString();
console.log(operandstring,typeof operandstring);