console.log("********************** Q.1 display first & last element ********************");
const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
//console.log(typeof fruits_seasonal);
console.log(`first element of array :`,fruits_seasonal[0]);
console.log(`last element of array :`,fruits_seasonal[4]);
console.log("********************** Q.2 insert papaya at starting index ********************");
fruits_seasonal.unshift("Papaya");
console.log(`Array after adding papaya :`,fruits_seasonal);
console.log("********************** Q.3 remove Mango ********************");
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);
console.log("********************** Q.4 insert Pineapple at last ********************");
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);
console.log("********************** Q.5 insert Dragon fruit before Water Melon ********************");
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(`insert element Dragon Fruit before Water-Melon :`,fruits_seasonal);
console.log("********************** Q.6 replace Orange with kiwi ********************");
fruits_seasonal.splice(2,1,"kiwi");
console.log(`replace element Orange with Kiwi :`,fruits_seasonal);
console.log("********************** Q.7 element starting for 1 to 4 ********************");
let fruit=fruits_seasonal.splice(1,3);
console.log(fruit);
console.log("********************** Q.8 log last 3 element ********************");
let f1=fruits_seasonal.slice(-3);
console.log(f1);






