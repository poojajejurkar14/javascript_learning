console.log("******************** scrore is <35 **********************");
function gradeSystems(score){
    console.log(`Student Score is :${score}`);
    if(score<35){
        console.log("You are Failed");
    }
    else{
    if(score>35 && score<60){
        console.log("You are Passed");
        console.log("and Grade is C");
    }

    else{if(score>=60 && score<75){
        console.log("You are passed");
        console.log("and Grade is B");
    }
    else{
        if(score>=75 && score<=90){
            console.log("You are passed");
            console.log("and Grade is A");
        }
        else{
            if(score>=90 && score<=100){
                console.log("You are passed");
                console.log("and Grade is A+");
            }
            else{
                if(score=="-20" || score>100){
                console.log("Invalid score");
            }
            else{
                if(score=="fifty five"){
                    console.log("Invalid Input");
                }
                else{
                    if(score=="null"){
                        console.log("null");
                    }
                    else{
                        if(score=="undefined"){
                            console.log("undefined");
                        }
                    }
                }
            }
        }
        }
    }
}

    }}

gradeSystems(13);
console.log("********************* scrore is >35 && <60 **********************");
gradeSystems(55);
console.log("********************* scrore is >=60 && <75 **********************");
gradeSystems(72);
console.log("********************* scrore is >=75 && <=90 **********************");
gradeSystems(82);
console.log("********************** scrore is >=90 && <=100 **********************");
gradeSystems(98);
console.log("*************** Invalid score ******************");
gradeSystems(-20);
console.log("*************** log Invalid Input ******************");
gradeSystems("fifty five");
console.log("*************** log Invalid Input,null,undefined ******************");
gradeSystems("null");
gradeSystems("undefined");