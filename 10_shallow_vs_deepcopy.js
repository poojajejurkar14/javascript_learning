let myName="mohit";
let abc=myName;


let Person={
    name:"pooja",
    age:22,
    city:"pune"
}
let student=Person;
student.city="mumbai";  //shallow copy
console.log(student.city);
console.log(Person.city);
function show(){
    console.log("show function");
    show();
}
show();