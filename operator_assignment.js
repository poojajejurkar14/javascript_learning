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
var ternary=function(){

}
ternary();