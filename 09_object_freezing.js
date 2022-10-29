// object freezing
const person={
    name:"mohit",
    rollno:22
}
Object.freeze(person);
person.name="pooja jejurkar";   // modification not consideras person object is freeze
console.log(person);

const array=[2,4,8,9,6];
Object.freeze(array);   //immutable: we cannot array values after creation or deletion
//array.push(99); //not azllow as object is freeze
console.log(array);

const student={
    name:"mohit",
    rollno:342
}
const address={
    city:"pune",
    street:"nagar"
}
let studentc=Object.assign({},student);
studentc.name="mohit sharma";
console.log(studentc);
console.log(student);
//merge to array
let merge=Object.assign({},student,address);
console.log(merge);