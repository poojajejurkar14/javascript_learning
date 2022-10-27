class Person{
    constructor(fullname,age,city,gender){
        this.fullname=fullname;
        this.age=age;
        this.gender=gender;
        this.city=city;
    }
    details(){
      console.log(`${this.age},${this.fullname}`);
    }
}
let sachine=new Person("pooja jejurkar",22,"pune","female");
console.log("======");
sachine.details();
console.table(sachine);
console.log(typeof sachine);

console.log("===============");
class Student{
    constructor(rollno,name){
        this.rollno=rollno;
        this.name=name;
    }
}
let s1=new Student(27,"pooja jejurkar");
console.table(s1);
// is property is available or not
console.log(s1 instanceof Student);
//access the property
console.log(s1.rollno);
//update the property
s1.rollno=29;
console.log(s1);
//delete the property
delete s1.name;
console.log(s1);