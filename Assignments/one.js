/* function array(b){
console.log(b.reverse());
}
let arr = ['a','b','c'];
array(arr); */

/* function caught_speed(speed,birthady){
    if(birthady){
        speed = speed - 5;
    }

    if( speed >= 61 && speed <=81){
        return 1;
    } else if(speed <= 60){
        return 0;
    }else{
        return 2;
    }
}
console.log(caught_speed(65,true));
console.log(caught_speed(65,false)); */

/* let arr = [5, 7, 2, 8, 1];
console.log(Math.max(...arr)); */
/* 
function myArr(arr){
    console.log(Math.max(...arr));
    console.log(Math.min(...arr));

}
let arr = [5, 7, 2, 8, 1];
myArr(arr); */

function sleep_in(weekday,vacation){
if( weekday === true && vacation === true){
    return false;
}else{
    return true;
}
}
console.log(sleep_in(true,false));
console.log(sleep_in(false,false));
console.log(sleep_in(true,true));
console.log(sleep_in(false,true));