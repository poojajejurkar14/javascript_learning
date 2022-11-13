// Write a arrow function such that - Pls don’t forget to log result on console with meaningful msg
// 1. With no args and no return value, log message on console inside arrow function
// a. “Good Evening, Today is Sunday” 
// 2. With 3 args and no return value, for received 3 parameters perform the multiplication
// a. Values to be passed ⇒ 5, 5, 2
// b. Invoke the same function for values ⇒ 10, 4 [Note: assign default value to 3rd arg ]
// 3. With 5 args and return value such as, for received params it should do the addition
// a. Values to be passed ⇒ 100, 100, 200, 349, 756
// b. Log the returned result on console with meaningful message for both step 3.a and 3.c 
// c. Invoke the same arrow function for values: “I am”, “learning”, “ ES6”, ‘ features’, “ in depth”

console.log("================ log the msg ===============");
let display=()=>{
    console.log("good morning , Today is Friday .");
}
display();
console.log("================ Perform the multiplication ===============");
let multiplication=(arg1,arg2,arg3=2)=>{
     console.log(arg1*arg2*arg3);
}
multiplication(5,5,2);
console.log("================ Invoke the same function (assign default value to 3rd arg) ===============");
multiplication(10,4);
console.log("================ With 5 args and return value ===============");
let addition=(arg1,arg2,arg3,arg4,arg5)=>{
    console.log(arg1+arg2+arg3+arg4+arg5);
}
addition(100, 100, 200, 349, 756);
console.log("================ Invoke the same arrow function for values:“I am”,“learning”,“ ES6”,‘features’,“in depth” ===============");
addition('I am', ' learning', ' ES6', ' features', ' in depth');







