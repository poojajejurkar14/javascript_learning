const person={
    name:"mohit",
    age:22,
    city:"pune",
    ismarried:true,
}
for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(element);
        
    }
}