let arrayofnumber=[1,3,7,8,9,3,7];
//  update the value of 4th index
arrayofnumber[4]=11;
console.log(arrayofnumber);
//  include methods
let includemethod=arrayofnumber.includes(7);
console.log(includemethod);
console.log(arrayofnumber.includes(9));
//  traverse the array or visit array
for (let index = 0; index < arrayofnumber.length; index++) {
    const element = arrayofnumber[index];
    console.log(element);
}
console.log("====================");
        // oR using for-in loop
        for (const index in arrayofnumber) {
            const element=arrayofnumber[index];
            console.log(element);
        }

        console.log("************* reverse order *************");
        let totalnumber=arrayofnumber.length-1;
        for (let index = totalnumber; index>=0; index--) {
            const element = arrayofnumber[index];
            console.log(element);
        }

        console.log("******** add element at the starting ************");
        // add the element at strating index using : unshift()
        let arrayofnumbers=[1,3,7,8,9,3,7];
        arrayofnumbers.unshift(5,4);
        arrayofnumbers.unshift(0);
        console.log(arrayofnumbers);

        console.log("******** remove element at the starting ***********");
        let array=[11,22,47,81];
        // remove starting array using : shift()
        console.log("before removing element:",array);
        array.shift();
        console.log("after removing element:",array);

        console.log("******** remove element in middle *********");
        let arraynumber=[1,2,3,4,5,6];
        let slice=arraynumber.slice(2);
        console.log(slice);
        let silcevalue=arraynumber.slice(1,4);
        console.log(silcevalue);
        
        console.log("********* splice ***********");
        let array_number=[1,3,7,8,9,3,7];
        console.log(array_number);
        //let splicedelement=array_number.splice(4);    //it remove element from 4th index to the end
        //let splicedelement=array_number.splice(2,2);    // it remove element from 2nd index to 2nd element
        let splicedelement=array_number.splice(2,0,22);    // it remove element from 2nd index to 2nd element
        console.log(splicedelement);
        console.log(array_number);    