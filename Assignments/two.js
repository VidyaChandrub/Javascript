/* var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i); */

/* let numArray = [];
let i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i); */

/* let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i); */

/* let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj);
  obj.review = "bad";
  obj.newProp = "Test";
  console.log(obj); */
  /* const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5])); */

  /* var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null,arr);
console.log(maximus) */

/* const myArray = [];

for (let i = 9; i > 0; i -=2) {
 console.log(myArray.push(i));
} */
/* 
var myArray = [];

// Only change code below this line.
for (var i = 1; i > 0; i -= 2) {
  console.log(myArray.push(i));
} */

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}