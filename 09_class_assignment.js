//define a class for vehical which should contains
// 1)properties or data members
  //  2)constructor
//create 5 object from Vehical class and log on console
class Vehical{
    constructor(color,prize,type,name,wheels){
        this.color=color;
        this.prize=prize;
        this.name=name;
        this.type=type;
        this.wheels=wheels;
    }
}
let v1=new Vehical("white",700000,"4-wheeler","swift",4);
let v2=new Vehical("pink",900000,"4-wheeler","duster",4);
console.table(v1);
console.table(v2);

//define a class for college which should contains
// 1)properties or data members
  //  2)constructor
//create 4 object from college class and log on console
class College{
    constructor(name,place,autonomus,color){
        this.place=place;
        this.autonomus=autonomus;
        this.name=name;
        this.color=color;
    }
}
let c1=new College("PREC","Loni","No","Orange");
let c2=new College("SCSMCOE","ahmednagar","No","red");
console.table(c1);
console.table(c2);
console.log("========= instance of ===========");
console.log(c1 instanceof College);
console.log(v1 instanceof Vehical);
console.log("=============== traverse the object for college ===============");
for (const key in c1) {
    if (Object.hasOwnProperty.call(c1, key)) {
        const element = c1[key];
        console.log(`${key},${element}`);    
    }
}
console.log("=============== traverse the object for vehical ===============");
for (const key in v1) {
    if (Object.hasOwnProperty.call(v1, key)) {
        const element = v1[key];
        console.log(`${key},${element}`);
    }
}

console.log("***************** fibonacci series *********************");
function fibonacci(mynumber) {
    //let mynumber=8;
if (mynumber==0) {
    return 0;
} 
if (mynumber==1) {
    return 1;
} 
let fstnum=0,sndnum=1;
nextnum=fstnum+sndnum;
for (let index = 0; index < mynumber; index++) {
    fstnum=sndnum;
    sndnum=nextnum;
    nextnum=fstnum+sndnum;
    console.log(nextnum);
    
}
}
fibonacci(5);