function do_assignment(callback){   //prashant
    console.log("i am doing assignment");
    callback();
    return function(){
        console.log("yahoo..mai to bn gaya...angular developer");
    }
}
function copy_assignment(){ //rohit
    console.log("Hey bro...Thank you..lets me copy");
}
let returnfun=do_assignment(copy_assignment);
returnfun();