let person={
    name:"mohit",
    age:22,
    city:"pune",
}
console.log(Object.entries(person));
console.log(Object.keys(person));
console.log(Object.values(person));




let objectName={
    fullname:"pooja jejurkar",
    city:"shirdi",
    age:22,
    marrital_status:false,
    address:{
        street:"a.nagar",
        pinCode:423107,
        city:"pune",
        state:"maharastra"
    },
    eat:function(){
        console.log("i am vegeterian");
    },
    walk:function(){
        console.log("i do walk everyday");
    },
    details:function(){
        console.log(this.fullname);
        //let persondetails=this.fullname+" "+this.age+" "+this.city+" "+this.address.state;
        return persondetails=`persondetails are:${this.fullname},${this.age},${this.address.state}`;
        //return persondetails;

    }
        //
}
// objectName.address.state="MH";
// console.table(objectName);
objectName.eat();
objectName.walk();
let details=objectName.details();
console.log(details);
objectName.fullname="Pooja Ravsaheb Jejurkar";
console.log(typeof objectName);
console.log(objectName.address.state);
objectName.address.landmark="Near main road"
delete objectName.age;
console.table(objectName);
let objname=objectName.fullname;
console.log(objname);
console.log(objectName.fullname);
console.log(objectName.marrital_status);    //OR
console.log(objectName["city"]);
objectName.pinCode=423107;
console.table(objectName);
objectName.Profesion="Angular Developer"
console.table(objectName);
let college={
        //empty object

}
console.log(college);