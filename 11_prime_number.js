function primeno(numbertocheck) {
    for(let index=2;index<numbertocheck;index++){
        if(numbertocheck%index==0){
            return false;
        }
    }
        return true;
}
primeno(11);
console.log(primeno(11));
console.log(primeno(9));
console.log(primeno(29));