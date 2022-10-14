console.log(10 + 20);
console.log(10 + 100.23);

var num1 = 10;
var num2 = 4;
var result = num1 * num2;
var result1 = num1 / num2;
var result2 = num1 % num2;
var result3 = num1 + num2;
console.log(`result is :${result}`);
console.log(`result is :${result1}`);
console.log(`result is :${result2}`);
console.log(`result3 is :${result3}`);
console.log("******************** modulo operator ******************");
console.log(11%2);

console.log("******************** ++ increment operator ******************");
var num1 = 10;
var num2 = 4;
var increment=++num1;
var decrement=--num2;
console.log(`Result:${increment}`);
console.log(`Result:${decrement}`);

console.log("******************** compound addition operator ******************");
var num1 = 10;
var num2 = 4;
//var num1=num1+num2;
num1+=num2;
console.log(num1);
num1-=num2;
console.log(num1);
num1*=num2;
console.log(num1);
num1/=num2;
console.log(num1);

console.log("******************** comparision operator ******************");
var num1=100;
var num2=50;
console.log(num1<num2);
console.log(num1>num2);
console.log(num1!=num2);

var num3=30;
console.log(num2<=num3);
console.log(num2>=num3);

console.log("******************** == operator ******************");
var num1=70;
// var num2=70;
var num2="70";
var result=num1==num2;
console.log(result);

console.log("******************** === operator ******************");
var num1=40;
// var num2=70;
var num2=40;
var result=num1===num2;
console.log(result);

