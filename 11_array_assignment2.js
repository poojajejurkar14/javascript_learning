const array_number=[20,31,40,25,23,11,29,9,60,2,11];
console.log("==================== length of array ======================");
let a1=array_number.length;
console.log("Total length of array :",a1);
console.log("================== log first & last element =================");
console.log("First element :",array_number[0]);
console.log("Last element :",array_number[10]);
console.log("======================== log 3rd last element =====================");
let length=array_number[array_number.length-3];
console.log(length);
console.log("============================== find even no ===========================");
const even=[];
for (let index = 0; index < array_number.length; index++) {
    const num=array_number[index]
    if (num%2==0) {
        even.push(num);
    }
}
console.log(even);
console.log("=========================== find odd no ==========================");
const odd=[];
for (let index = 0; index < array_number.length; index++) {
    const num=array_number[index];
    if (num%2!=0) {

        odd.push(num);
    }
}
console.log(odd);
console.log("===================== find all even positioned element =====================");
function even1(arr){
    let str=" ";
    const array_number1=[20,31,40,25,23,11,29,9,60,2,11];
    for (let i = 0; i< array_number1.length; i++) {
        if (i%2==0) {
            str=str+array_number1[i]+" ";
        }
    }
    return str;
}
console.log(even1([20,31,40,25,23,11,29,9,60,2,11]));
console.log("===================== find all odd positioned element =====================");
function odd1(arg){
    let str=" ";
    const array_number2=[20,31,40,25,23,11,29,9,60,2,11];
    for (let i = 0; i< array_number2.length; i++) {
        if (i%2!=0) {
            str=str+array_number2[i]+" ";
        }
    }
    return str;
}
console.log(odd1([20,31,40,25,23,11,29,9,60,2,11]));
console.log("==================== find sum of all element ==============");
var sum=0;
for (let index = 0; index < array_number.length; index++) {
    sum+=array_number[index];
}
console.log("sum is :" ,+ sum);
console.log("===================== find no which is multiple of 5 ===================");
function m1(num,num1){
    var mul=[];
for (let index = 0; index < num.length; index++) {
    if (num[index]%num1===0) {
        mul.push(num[index]);
    }
    
}
return mul;
}
console.log(m1([20,31,40,25,23,11,29,9,60,2,11], 5));
console.log("==================== 23 is available =====================");
let a2=array_number.includes(23);
console.log("Is number 23 is available in array :",a2);
console.log("==================== 115 is available ===================");
let a3=array_number.includes(115);
console.log("Is number 115 is available in array :",a3);

