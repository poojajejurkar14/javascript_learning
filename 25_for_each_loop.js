//normal function
let show=function(){
    console.log("hello");
}
show();
//arrow function
let display=(n1,n2)=>{
    console.log("hii");
}
display(10,20);

//arrow function
let array1=[10,20,30,40,50];
array1.forEach((currentvalue,index)=>{
    console.log(currentvalue,index);
}); //OR
//array1.forEach(currentvalue=>console.log(currentvalue)
//);

console.log("*************** print negetive no *******************");
let array8=[10,-20,30,-40,50];
array8.forEach((currentvalue,index)=>{
    if(currentvalue<0){
        console.log(currentvalue,index);
    }
})
console.log("========== forEach traverse on set =========");
// forEach on set:
let setnumber=new Set(array1);
setnumber.forEach((value)=>{
    console.log(value);
});
console.log("========== forEach traverse on map =========");
let map=new Map();
map.set(22,"pooja");
map.set(33,"sona");
map.set(27,"poonam");
map.forEach((key,value)=>{
    console.log(key,value);
});
console.log("============= forEach on class ===============");
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
array.forEach((key,value)=>{
    console.log(key,value);
})
