/* var str = "Welcome to javascript";

let reversestr = (str) =>{

    var arr = str.split("");
    var revstr = arr.map(item =>{
        return item.split("").reverse().join("");
    })
    
    return revstr.join("");
}
console.log(reversestr(str)); */
const str = 'Hello World how is it outside';
const reverseSentence = str => {
   const arr = str.split(" ");
   const reversed = arr.map(el => {
      return el.split('').reverse().join("");
   });
   return reversed.join(" ");
};
console.log(reverseSentence(str));