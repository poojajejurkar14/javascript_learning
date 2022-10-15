var test=function(grad_score, hsc_score, ssc_score, candidate_name){
    console.log(grad_score>=70);
    var result= grad_score>=70||hsc_score>=80||ssc_score>90
    ? `Congrates ${candidate_name} you are eligible for TCS interview`
    :"Else Unfortunately you are not eligible for interview";
    console.log(result);
}
test(80,86,98,"pooja");
test(69, 65, 55, "praju");