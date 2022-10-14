var greet ="Good Morning";
var count=greet.length;
console.log(count);
console.log("*********************** charAt Method ***********************");

console.log(greet.length);
console.log(greet);
console.log("*********************** charAt Method ***********************");
greet.charAt(8);
var charAt_a=greet.charAt(8);
console.log(charAt_a);
console.log("*********************** indexof Method ***********************");
console.log(greet.indexOf("Morn"));
//var char=greet.indexOf("o");
//console.log(char);
console.log("*********************** concat Method ***********************");
var fname = "virat";
var sname = "kolhi";
var result = fname.concat(" ",sname);
console.log(result);

console.log("*********************** Replace Method ***********************");
var great="good morning bro and sis";
var replaceDemo =great.replace("morning","evening");
console.log(replaceDemo);
console.log("*********************** toLowerCase Method ***********************");
console.log(replaceDemo.toLowerCase());
console.log("*********************** toUpperCase Method ***********************");
console.log(replaceDemo.toUpperCase());
console.log("*********************** trim Method ***********************");
var great="     good morning bro and sis   ";
console.log(great.length);
var trimResult=great.trim();
console.log(trimResult.length);
console.log("*********************** include Method ***********************");
var great="good morning bro and sis";
console.log(great.includes("bro"));

console.log("*********************** slice Method ***********************");
var great="good morning bro and sis";
console.log(great.slice(13,17));

console.log("*********************** substring Method ***********************");
var great="good morning bro and sis";
console.log(great.substring(8));
console.log(great.substring(13,17));
console.log("*********************** split Method ***********************");
var studentList="sunil|sita|gita|pooja|jenny";
var splitResult= studentList.split("|");
console.log(splitResult);
var impquote=`"Do or Die" this attitude is importantfor this training`;
console.log(impquote);
var fname = "virat";
var sname = "kolhi";
//first name=${fname}     sur name:${sname}
console.log(`first name:${fname} and surname:${sname}`);