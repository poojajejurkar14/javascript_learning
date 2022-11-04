
console.log(myname);
//console.log(rollno);//not allowed
//console.log(city);// not allowed
var myname="pooja jejurkar";
let rollno=123;     //using the let keyword not allow to access because it does not hosted
const city="pune"   //using the let keyword not allow to access because it does not hosted

//  Normal function
show(); //hosted & allowed
function show(){
    console.log("show function");
}

//  function Expression:
//display();  // not allow
var display=function(){
    console.log("inside display function expression");
}
display();
