function gradeSystem(score){
    if(score>35){
        console.log(`Student Score is :${score}`);
        console.log("You are Passed");
        console.log("and Grade is B");
    }
    else{
        console.log("You are Failed");
    }
    
}
gradeSystem(60);
console.log("**********************************");
function gradeSystems(score){
    console.log(`Student Score is :${score}`);
    if(score>35){
        
        console.log("You are Passed");
        console.log("and Grade is B");
    }
    else{
        console.log("You are Failed");
    }
    
}
gradeSystems(30);
console.log("*********************************");
function gradeSystem1(score1){
    console.log(`Student Score is :${score1}`);
    if(score1>=60 || score1<75){
        console.log(`Student Score is :${score1}`);
        console.log("You are Passed");
        console.log("and Grade is B");
    }
    else{

        console.log("You are Failed");
    }
    
}
gradeSystem1(70);
console.log("*********************************");
function gradeSystem2(score2){
    console.log(`Student Score is " " .`);
    if(score2>35){
      
        console.log("Invalid Input");
    }
    else{

        console.log("");
    }
    
}
gradeSystem1(91);
console.log("*********************************");
function gradeSystem3(){
    score3=`"fifty five"`;
    console.log(`Student Score is :${score3}`);
    if(score3>35 || score3>=35){
        
    }
    else{
        console.log("Invalid Input");
    }
    
}
gradeSystem3();

console.log("*********************************");
function gradeSystem4(score1){
    
    if(score1<=90 && score1>=75){
        console.log(`Student Score is :${score1}`);
        console.log("You are Passed");
        console.log("Grade is A");
    }
    else{

        console.log("You are Failed");
    }
    
}
gradeSystem4(75);
console.log("*********************************");
function gradeSystem5(score1){
    
    if(score1>=90 && score1<=100){
        console.log(`Student Score is :${score1}`);
        console.log("You are Passed");
        console.log("Grade is A+");
    }
    else{

        console.log("");
    }
    
}
gradeSystem5(90);
console.log("===============");
gradeSystem5(" ");
console.log("===============");
gradeSystem5(66);