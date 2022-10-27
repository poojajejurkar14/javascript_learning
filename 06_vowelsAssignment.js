//count the total no.of vowels using includes methods
console.log("*******  vowels using includes *********");
var givenstring = "Good Morning IT Champ";
var string1 = givenstring.toLowerCase();
var strlength = string1.length;
for (let index = 0; index < strlength; index++) {
    var char = string1.charAt(index)
    var vowels = "aeoiu";
    if (vowels.includes(char)) {
        console.log(char);
    }
}
console.log("*******  count vowels *********");
var givenstring = "I Love Javascript";
var string1 = givenstring.toLowerCase();
//console.log(string1);
var strlength = string1.length;
var count = 0;
for (let index = 0; index < strlength; index++) {
    var char = string1.charAt(index);
    var vowels = "aeiou";
    if (vowels.includes(char)) {
        console.log(char);
        count = count + 1;
        console.log(count);
    }
}
console.log("*******  WA Function to sum all 0 to 10 *********");
var Function1 = function () {
    0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
    var add = 0;
    for (let index = 0; index <= 10; index++) {
        add = add + index;
        console.log(add);
    }
}
Function1();
console.log("*******  WA Function to sum of square of 0 to 5 *********");
var Function2 = function (arg) {
    var square = 1
    var addition = 0;
    for (let index = 1; index <=5; index++) {
        square = index *index;
        addition=addition+square;
        console.log(addition);
        // return square1;
    }
}
Function2(2);
console.log("*******  WA Function log only even positioned chars *********");
var evenPositionedChars = function (arg) {
    var givenstring = arg;
    var strlength = givenstring.toLowerCase();
    var strlower = givenstring.length;
    for (let index = 0; index <= strlower; index++) {
        var char = strlength.charAt(index)
        if (index % 2 == 0 && char != " ") {
            if (char == "a" || char == "i" || char == "o" || char == "u" || char == "e") {
                console.log(char);
            }
        }
    }
}
evenPositionedChars("Hard work always pays back");
console.log("----");
evenPositionedChars("Soon I will be IT Champ");


console.log("*******  WA Function log only even positioned chars *********");
var oddPositionedChars = function (arg) {
    var givenstring = arg;
    var strlength = givenstring.toLowerCase();
    var strlower = givenstring.length;
    for (let index = 0; index <= strlower; index++) {
        var char = strlength.charAt(index)
        if (index % 2 != 0 && char != " ") {
            if (char == "a" || char == "i" || char == "o" || char == "u" || char == "e") {
                console.log(char);
            }
        }
    }
}
oddPositionedChars("Hard work always pays back");
console.log("=======");
oddPositionedChars("Soon I will be IT Champ");