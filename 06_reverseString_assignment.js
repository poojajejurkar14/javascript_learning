function reverseString(arg) {
    var agrlength = arg.length - 1;
    var reverseString = "";
    for (let index = agrlength; index >= 0; index--) {
        //console.log(arg.charAt(index));
        reverseString = reverseString + arg.charAt(index);
    }
    console.log(reverseString);
}
reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");