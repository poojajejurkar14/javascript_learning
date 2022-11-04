// Normal function
var global_variable=300;    // access anywhere in this file
function outer() {
    let outer_fun_variable = 100;
    let inner_fun = function () {
        let inner_fun_variable=200;
        console.log(inner_fun_variable,global_variable,outer_fun_variable);
    }
    return inner_fun;
}
let returnvalue=outer();
returnvalue();


