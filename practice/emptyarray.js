// how to empty an array

/* var arrlist = [1,2,3,4,5];
var anotherarr = arrlist;
arrlist = [];
console.log(anotherarr);
console.log(arrlist) */            //not a good practice

/* var arrlist = [1,2,3,4,5];
var anotherarr = arrlist;
arrlist.length = 0;
console.log(anotherarr); */

/* var arrlist = [1,2,3,4,5];
var anotherarr = arrlist;
arrlist.splice(0,arrlist.length)
console.log(anotherarr); */

function isInt(num) {
    return num % 1 === 0;
  }
  
  console.log(isInt(4)); // true
  console.log(isInt(12.2)); // false
  console.log(isInt(0.3));
