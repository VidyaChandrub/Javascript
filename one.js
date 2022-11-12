/* function calculate_Age(age){

    let remain_days =  (90*365) - (age*365);
    
    let remain_weeks =  (90*52) - (age*52);
    
    let remain_months =  (90*12) - (age*12);
    
    console.log("you have "+remain_days+" days , "+remain_weeks+" weeks , "+remain_months + " months left");
    
    }
    calculate_Age(32);
 */

    function bmi_Cal(weight,height){
         var result = Math.floor(weight/height*height);
         return result;
    }
    var result = bmi_Cal(3,2);
    console.log(result);

    var result = bmi_Cal(5,2);
    console.log(result);

    var result = bmi_Cal(6,2);
    console.log(result);

    var result = bmi_Cal(6,2);
    console.log(result);
