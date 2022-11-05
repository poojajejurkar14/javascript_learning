'use strict mode'
// myname="pooja";// not allow
// console.log(myname);

// let age=22;
// // delete age
// person={
//     name:"pooja",
//     age:22
// }
//  rest parameter:
function display(name,age,...myname){   //normal arg pahile ale pahije mg last rest parameter bcos it hold all the values
    console.log(name,age,myname);
    console.log(typeof myname);

}
//display("pooja",22);
//display("pooja",22,33); run hoil
//display("pooja");
//console.log(typeof undefined);
display("pooja",22,44,true ,"city");


//function default parameter:
function divide(x,y=2){ //provide default value to the arg 
    console.log(x/y);
}
divide(10); // if you are not given 2nd arg it will take default