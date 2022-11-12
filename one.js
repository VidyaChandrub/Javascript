function calculate_Age(age){

    let remain_days =  (90*365) - (age*365);
    
    let remain_weeks =  (90*52) - (age*52);
    
    let remain_months =  (90*12) - (age*12);
    
    console.log("you have "+remain_days+" days , "+remain_weeks+" weeks , "+remain_months + " months left");
    
    }
    calculate_Age(32);