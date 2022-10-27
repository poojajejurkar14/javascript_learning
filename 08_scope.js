// function scope
function diplay(){
    var message="hello";
}
//console.log(message);   // variable not allow to access outside the function
diplay();


//block scope
if (true) {
    let message="good morning";
    const PI=3.14;
}
//console.log(message);     //not allow variable let and const - block scope
//console.log(PI);

if (true) {
    var greet="good";
}
console.log(greet);    // allow because of var keyword have function scope