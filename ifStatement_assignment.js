// Please make sure to write function for each step and use the if block
// 1. Create a function to check passed argument number value is even or odd and return the 
// result as EVEN or ODD. Ex. 45, 70, 67, 98 
// 2. Check if person is eligible for vote or not Ex→ age: 18, 20, 17, 40
// 3. Check if string contains more than 10 character or not Ex → “JavaScript - ES6”
// 4. Check if string starts with “Java” Ex→ “JavaScript Language”
console.log("************ even odd **************");
var evenodd=function(number){
    if (number%2==0) {
        console.log("EVEN");   
    }
    else{
        console.log("ODD");
    }
}
evenodd(45);
evenodd(70);
evenodd(67);
evenodd(98);

console.log("*************** eligible for vote or not ***************");
var eligibility=function(age){
    if (age>=18) {
        console.log("Eligible for voting");   
    }
    else{
        console.log("Not eligible for voting");
    }
}
eligibility(18);
eligibility(20);
eligibility(17);
eligibility(40);

console.log("*************** check str more than 10 char ***************");
var character=function(str){
    if (str.length>10) {
        console.log("Greater than 10 characters");   
    }
    else{
        console.log("Not Greater than 10 characters");   
    }
}
character("JavaScript - ES6");

console.log("*************** check str starts with Java ***************");
var string1=function(){
    var str="JavaScript Language";
    if (str.startsWith("Java")) {
        console.log("Yes");   
    }
    else{
        console.log("No");   
    }
}
string1();