// Pls use ternary operator and function expression
// Fun expression with no return value to check TCS interview eligibility such as, If Graduation score 
// is greater than equal to 70% OR HSC score is greater than equal 80% OR SSC score is greater than 
// 90% then only 
// 1.1. Function expression args → grad_score, hsc_score, ssc_score, candidate_name 
// 1.2. Congrates {candidate_name} you are eligible for TCS interview. Else Unfortunately you 
// are not eligible for interview
// 1.3. Invoke Fun Expr with values as
// 1.3.1. 80, 86, 90, “your name”
// 1.3.2. 70, 65, 55, “your frd name”
// 1.3.3. 60, 79, 88, “ your other frd name ”
var test=function(grad_score, hsc_score, ssc_score, candidate_name){
    console.log(grad_score>=70);
    var result= grad_score>=70||hsc_score>=80||ssc_score>90
    ? `Congrates ${candidate_name} you are eligible for TCS interview`
    :"Unfortunately you are not eligible for interview";
    console.log(result);
}
test(80,86,98,"pooja");
test(69, 65, 55, "praju");
test(70,79,88,"sampada");