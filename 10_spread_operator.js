let Person={
    name:"pooja",
    age:22,
    city:"pune",
    address:{
        pin:423107,
        state:"MH"
    }
}
console.log(Person.name,Person.age,Person.city);
console.log(Person);
//let student={...Person};
let student = JSON.parse(JSON.stringify(Person))
student.city="mumbai";
Person.age=28;
console.log(student.city,Person.city);
console.log(student.age,Person.age);
student.address.pin=423108; //nested object 
console.log(student.address.pin,Person.address.pin);
console.table(Person);