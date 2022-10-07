//no argument and no return type function 
function sachine(){
    console.log("please go to market");
    console.log("buy some vegetable");
}
sachine();
console.log("***********************************");

// fuction with argument 
function pooja(money){
    console.log("please go to market");
    console.log("buy some vegetable");
}
pooja(500);
console.log("***********************************");

// fuction with argument 
function market(money){
    console.log("please go to market with RS:",money);
    console.log("buy some vegetable");
    return "vegetable bag";
}
var veg = market(500);
console.log(veg);






/*function swap_value(arg1, arg2){
    console.log("===========Before Swap=============");
    console.log(arg1, arg2);
    console.log("===========After Swap==============");
    var arg1=temp;
    arg1=arg2;
    arg2=temp;
    console.log(arg1, arg2);
}
swap_value("pooja","sampada");*/