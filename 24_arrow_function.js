//  normal function with no arg
function display() {
    console.log("good morning");
}
display();
//arrow function syntax: with no arg
let sub = () => {
    console.log("hello");

}
sub();
//normal function
let add = function (n1, n2) {
    console.log(n1 + n2);
}
add(20, 30);
//arrow function: with 2 arg
let sum = (n1, n2) => {
    n1 + n2
    //return n1+n2;
}
add(20, 40);
