//  most important 
'use strict'
let person={
    name:"pooja jejurkar",
    age:22,
    city:"pune",
    pin:423107,
    ismarried:false,
    state:"MH"
}
// let fullname=person.name;
// let age=person.age;
// let city=person.city;
// let state=person.state;

// destructuring object :means extract the key and values in one line
//let {name,age,state,ismarried,pin}=person;  //we have to take the variable name same as property
//console.log(name,age,state,ismarried,pin);  // e.g:name(variable)=name(property)

// object destructuring with default value:
let {name,age,state,ismarried,pin,country="india"}=person;  //we have to take the variable name same as property
console.log(name,age,state,ismarried,country,pin);  // e.g:name(variable)=name(property)

//array destructuring:
let array=["pooja","prajkta","sonali","komal","gita"];
// let  ele0=array[0];
// let  ele1=array[1];
// let  ele2=array[2];
// let  ele3=array[3];
// let  ele4=array[4];
let [ele0,ele1,ele2,ele3,ele4,ele5="sita"]=array;
console.log(ele0,ele1,ele2,ele3,ele4,ele5);