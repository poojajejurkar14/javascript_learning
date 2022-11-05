let is_recording_and_notes_available=true;
let promise= new Promise(function(resolve,reject){
    if(is_recording_and_notes_available){
        resolve("sir share recording and notes promise fullfill");
    }
    else{
        reject("sir not share recording and notes promise not fullfill");
    }
});
promise.then(function(succes){
    console.log(succes);
}) .catch(function(failure){
    console.log(failure);
}).finally(function(){
    console.log("Done...");
});