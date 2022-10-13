var char = function (value) {
    console.log("square of:", value * value);

}
char(5);
char(6);
char(25);
char(100);
console.log("******************** typeof ******************");
console.log(typeof char);
console.log("******************** Area of triangle ******************");
var triangle=function(base,height){
    var area=1/2*base*height;
    console.log("Area of triangle:",area);
}
triangle(45,34);
console.log("******************** Area of Rectangle ******************");
var Rectangle=function(length,width){
    var areaR=length*width;
    console.log("Area of Rectangle:",areaR);
}
Rectangle(499,917);
var Swap=function(arg1,arg2){
    
    console.log("************* Before Swap ****************");
    console.log(arg1,arg2);
    console.log("************* After Swap ****************");
   var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);

}
Swap("Virat","Anushka");
Swap(1000,2000);
console.log("*************** string methods() ****************");
var string=function(){
    var msg="JavaScript is most popular language"
    console.log(msg);
    console.log("*************** length() ****************");
    var lengthstr=msg.length;
    console.log(lengthstr);
    console.log("*************** indexOf() ****************");
    console.log(msg.indexOf("S"));
    console.log(msg.indexOf("lang"));
    console.log("*************** find last indexOf ****************");
    console.log(msg.charAt(msg.length-1));
    console.log("*************** find 3rd last indexOf ****************");
    console.log(msg.charAt(msg.length-3));



}
string();

