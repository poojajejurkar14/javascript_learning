// const array_numbers = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
// From the given array_numbers, try the hands-on for
// 1. Log the array element with it’s index using forEach( ) with arrow function
// 2. Find the positive numbers and log on console
// a. Using forEach( ) with arrow function
// 3. Find the negative numbers and log on console using arrow function
// 4. Find the even numbers and log on console using forEach( ) with arrow function
// 5. Find the sum of all elements from array_numbers and log on sum value on console.
// 6. Log the only even positioned array value on console. forEach( ) with arrow function prefered 
// 7. Log the odd positioned array value on console if it is negative.
const array_numbers = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
console.log("==================== Log array element with it’s index using forEach() use arrow fun =================");
array_numbers.forEach((currentvalue,index)=>console.log(currentvalue,index));
console.log("======================= Find the negative numbers and log =======================");
array_numbers.forEach((currentvalue,index)=>{
    if(currentvalue<0){
        console.log(currentvalue,index);
    }
})
console.log("====================== Find the positive numbers & log ========================");
array_numbers.forEach((currentvalue,index,array_numbers)=>{
    if(currentvalue>-1){
        console.log(currentvalue);
    }
})
console.log("====================== Find the sum of all elements from array ========================");
function sum(array){
    let sum=0;
array_numbers.forEach((currentvalue)=>{
   sum += currentvalue;
   
});
console.log(sum);
return sum;
}
sum( [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ]);
console.log("================== Log only even positioned array value ======================");
array_numbers.forEach((currentvalue,index)=>{
    if(index%2==0){
        console.log(currentvalue);
    }
});
console.log("================== Log only odd positioned array value ======================");
array_numbers.forEach((currentvalue,index)=>{
    if(index%2!=0){
        console.log(currentvalue);
    }
});
