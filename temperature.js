// kelvin is declared
const kelvin = 0;  
//celsius can be obtained by subtracting 273 
let celsius = kelvin - 273;
//conversion from celsius to fahreheint
let fahrenheit = Math.floor(celsius*(9/5)+32);

console.log(`"The temperature is ${fahrenheit} degrees Fahrenheit."`)

let newton = Math.floor(celsius*(33/100));
console.log(`"The temperature is ${newton} degrees Newton."`);
