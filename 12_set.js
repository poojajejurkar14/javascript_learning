let setno=new Set();
console.log(typeof setno);
console.log("********* add element into set********");
setno.add(5);
setno.add(8);
setno.add(5);
setno.add(2);
console.log(setno);
console.log("********* add duplicate element into set********");
setno.add(2);
console.log(setno);
console.log(setno.size);
console.log("*********** delete element **********");
setno.delete(3);
console.log(setno);
console.log(setno.size);
console.log("*********** check 7 is available or not **********");
let isavailable=setno.has(5);
console.log(isavailable);
let isavailable1=setno.has(7);
console.log(isavailable1);
console.log("*********** traversing set **********");
for (const element of setno) {
    console.log(element);
}
console.log("*********** remove duplicate element **********");
let array=[2,3,4,3,2,5,6,7];
let setnumber=[...new Set(array)];
console.log(setnumber);

