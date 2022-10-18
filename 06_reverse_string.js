var myname="pooja";
var mynamelength=myname.length-1;
var reversestr="";
for (let index = mynamelength; index >=0; index--) {
    console.log(myname.charAt(index));
    reversestr=reversestr+myname.charAt(index);
}
console.log(reversestr);
0+1+2+3+4+5
var add=0;
for (let index = 0; index <=5; index++) {
    add=add+index;
    console.log(add);
}