// Don’t forget to log result on console using string template only
// 1. Given a words “JavaScript”, “Google”, “Developer”, write a function expression in such a way 
// that should have one arg which should accept the above word as value 
// 1.1. Function name → wordLenghtSquare() with one arg, call this FE for each given words 
// 1.2. Calculator the length of word and return it’s length square.
// 2. Given a string “I am Angular Developer” write a function with no arg and no return value
// 2.1. Reverse the string and log on console: (Optional )
// 2.2. Find the string length and divide by total number words available in that string. Log the 
// result on console 
// 2.3. Find the string length and multiple by the total words available in string
var wordLengthSquare=function(arg){
    var result=arg.length;
    var square=result*result;
    console.log(`Given word is: ${arg}`);
    console.log(`length of word: ${result}`);
    console.log(`square of word: ${square}`);
    console.log("*******************************************");

}
wordLengthSquare("JavaScript");
wordLengthSquare("Google");
wordLengthSquare("Developer");

function sentence(){
    var givenstr="I Am Angular Developer";
    console.log(givenstr);
    console.log(`string lenrgth: ${givenstr.length}`);
    var result=givenstr.split(" ");
    console.log(result);
    var total_word=result.length;
    console.log(`string length divided by total words: ${givenstr.length/total_word}`);
    console.log(`string length divided by total words: ${givenstr.length*total_word}`);      
    
}
sentence();

console.log("******************** Assignment 2 **********************");
console.log("******************** Find greatest no among two no **********************");
var ternary=function(arg1,arg2){
    var number;
}
ternary();