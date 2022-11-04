//Functions are known as first class citizens in JavaScript
// It is because of three reasons
// 1. Function can be stored in a variable
// 2. Function can be passed as an argument to another function
// 3. A function can return another function

// 3. A function can return another function
function message(){
    console.log("inside message function");
    return inner_fun=function(){
        console.log("inside inner function");
    }
    
    //return 10;
}
message()();
