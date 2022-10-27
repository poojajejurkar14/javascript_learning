// 
 teacher={
    name:"pooja ravsaheb jejurkar",
    age:22,
    Qualification:"BE-Comp",
    passing_year:2022,
    city:"pune",
    state:"Maharastra",
    degrees:{
        engineering:"CSC",
        PHD:"PHD",
        Qualification:"B-Tech"

    },
    certificates:{
        first:"Hacker Rank",
        second:"IFE Course",
        third:"Adv Programming"
    },
details:function(){
    //console.log(this.name);
    return teacher_details=`Total Teacher Details are:${this.degrees.engineering},${this.degrees.PHD},${this.degrees.Qualification}`
}
    
}
console.table(teacher);
teacher.details();
console.log("*******************Add function to concat all degrees **********************");
console.log(teacher_details);
console.log("******************* Try to add new property **********************");
teacher.experience="4 year";
console.table(teacher);
console.log("******************* Modify existing property & log on console **********************");
teacher.name="Pooja Jejurkar";
console.table(teacher);
console.log("******************* Delete one certificate from nested object **********************");
delete teacher.certificates.third;
console.table(teacher);
console.log("******************* Add new certificate in nested object **********************");
teacher.certificates.third="Data Science";
console.table(teacher);
console.log("******************* Log nested object ‘certificate’ on console *********************");
console.log(`All certificates Are:`);
console.table(teacher.certificates);





