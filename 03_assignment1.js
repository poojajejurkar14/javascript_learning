function numbers(){
    console.log("=============== no arguments ===================");
    console.log("Todays Need Education");
    console.log("Education is the most powerful weapons");
}
numbers();

function fullName(){
    console.log("================= Concatination =================");
    firstName="Pooja";
    lastName="Jejurkar";
    console.log(firstName+lastName);
}
fullName();

function swap_values(arg1, arg2){
    console.log("================= Before Swaping =================");
    console.log(arg1,arg2);
    console.log("================= After Swaping =================");
    temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(arg1,arg2);
}
swap_values("Virat","Anushka");
swap_values(1000,2000);
console.log("==================================");
function add_three_numbers(arg1, arg2,arg3){
   
   console.log(arg1+arg2+arg3);
  
}
add_three_numbers(10.23,600,40);
add_three_numbers("Hello","Good","Morning")


