var givenstring="i love javascript";
var totalchar=givenstring.length;
for (let index = 0; index <totalchar ; index++) {
    if (index%2==0) {
    var charAt=givenstring.charAt(index);
    console.log(charAt);
    }
}

// WAP to just log the vowels form the given string : a,e,i,o,u
console.log("============ just log vowelsl ===========");
for (let index = 0; index < givenstring.length; index++) {
   var char= givenstring.charAt(index);
    if (char=="a"|| char=="e"|| char=="o"||char=="u"||char=="i") {
        console.log(char);
    }    
    else{
        console.log(char);
    }
}
var vowels="aeiou";
vowels.includes(a);