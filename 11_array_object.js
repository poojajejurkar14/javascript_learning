class Person{
    constructor(fullname,age,city,gender){
        this.fullname=fullname;
        this.age=age;
        this.gender=gender;
        this.city=city;
    }
    details(){
      console.log(`${this.age},${this.fullname},${this.city},${this.gender}`);
    }
}
let Personanil=new Person("Anil Mohite",31,"pune","male");
let Personanita=new Person("Anita golande",21,"pune","female");
let Personbill=new Person("Billgates",51,"pune","male");
const array=[Personanil,Personanita,Personbill];
for (let index = 0; index < array.length; index++) {
    const element =array[index];
    if (element.age>=50) {
        console.log(`${element.fullname},${element.age},${element.city},${element.gender}`);
    }
}
