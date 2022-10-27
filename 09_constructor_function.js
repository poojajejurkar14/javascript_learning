function Person(fullname,age,city,gender){
    this.fullname=fullname;
    this.age=age;
    this.city=city;
    this.gender=gender;
}
let sachine=new Person("sachine",22,"pune","male");
console.table(sachine);
let priya=new Person("priya",22,"pune","female");
let praju=new Person("praju",22,"pune","female");
let sona=new Person("sona",22,"pune","female");

//prototype object
Person.prototype.country="India"
console.log(sona.country);
