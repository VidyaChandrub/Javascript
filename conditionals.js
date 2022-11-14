/* Check whether the given number is divisible by 7 or not
var num=40;
if(num%7==0)
{
    console.log("The given number is divisible by 7");
} else
{
    console.log("The given number is not divisible by 7");
}      */

/* var num=7;
if(num % 3 == 0)
{
    console.log("The given number is multiple of 3"); 
}
else
{
    console.log("The given number is not a multiple of 3");
}   */

/* var num=4;
if(num > 0){
    console.log("The given number is positive");
}
else{
    console.log("The given number is negative");
}    */

/* var num=383;
if( num>99 && num<999)
{
    console.log("The given number is a 3 digit");
}
else{
    console.log("The given number is not a 3 digit");
}        */

/* var num=33;
if(num % 2==0)
{
    console.log("The given number is even");
}
else{
    console.log("The given number is odd");
} */

/* var a=2;
var b=8;
if (a>b){
   console.log("a is greater");
}
else{
    console.log("b is greater");
}

var a=2;
var b=8;
if (a<b){
   console.log("a is least");
}
else{
    console.log("b is least");
}  

var a=4;
var b=8;
var c=2;
if (a>b){
   console.log("a is least");
}
else if(a>c){
    console.log("b is least");
}
else{
    console.log("c is least");
} */

function test (myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
  }
  
  let a = test(false);
  console.log(a);