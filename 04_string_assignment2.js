function stringHandsOn() {
    var message = "      Hey you are doing good, keep it up     ";
console.log("************************ print the string *********************");
console.log(message);
console.log("*********************** Length() ***********************");
console.log(message.length);

console.log("************************ remove extra spaces trim() *********************");

    var message = "      Hey you are doing good, keep it up     ";

    console.log(`given string is:${message}`);
    var str1 = message.length;
    console.log(`length of the given string is:${str1}`);
    var str2 = message.trim()
    console.log(`removed leading and extra space is:${str2}`);
    // console.log(str2.length);
    var str3 = str2.length;
    var str4 = str1 - str3;
    console.log(`removed extra spaces is:${str4}`);
    console.log("************************ count 1st and lastcharacter  *********************");
    console.log(str2.charAt(0));
    console.log(str2.charAt(str2.length-1));
    console.log("************************ split() *********************");
var message = "Hey you are doing good, keep it up";
console.log(message.split(" "));

console.log("************************ indexOf() *********************");
var message = "Hey you are doing good, keep it up";
console.log(message.indexOf("good"));

console.log("************************ slice() *********************");
console.log(message.slice(22));
console.log("************************ substring() *********************");
console.log(message.substring(22));
console.log("************************ endsWith() *********************");
console.log(message.endsWith("up"));
console.log("************************ startsWith() *********************");
console.log(message.startsWith("Hey"));
}
stringHandsOn();


