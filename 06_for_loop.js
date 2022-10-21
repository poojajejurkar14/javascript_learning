for (var index = 1; index <=10; index++) {
    console.log(index);
}
 console.log("=========== even no ============");
for (var index = 0; index <=10; index=index+2) {
         console.log(index);
}
 console.log("=========== even no ============");
for (var index = 5; index <=15; index=index+1) {
         console.log(index);
}
console.log("============ Reverse no from 50 to 40 =================");
for (let index = 50; index >=40; index--) {
         console.log(index);
    
} console.log("=========== odd no ============");

 for (let index =1; index <=30; index=index+2) {
     //console.log(index);
    
 }//OR
 for (let index = 1; index <30; index++)
 {
    if (index%2!=0) {
        console.log(index);
    }
 }
console.log("=================");
 //WAP to print 1st 43 even no
 var counteven=0
 for (let index = 0; index <1000; index++) {
    if (index%2==0) {
        console.log(index);
        counteven=counteven+1;
        if (counteven== 43) {
            break;
            
        }
    }

   
 }