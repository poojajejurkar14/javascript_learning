function do_assignment(callback,callbackAmar){   //prashant
    console.log("i am doing assignment");
    callback();
    callbackAmar();
}
function copy_assignment(){ //rohit
    console.log("Hey bro...Thank you..lets me copy");
}
function copy_assignment1(){ //Amar
    console.log("Hey bro...Thank you..lets me also copy");
}
do_assignment(copy_assignment,copy_assignment1);

// display on output after 2 second
function display(){
    console.log("display function");
}
function show(){
    console.log("display function");
}
setTimeout(display,5000);// run but after this time
setInterval(show,2000); //