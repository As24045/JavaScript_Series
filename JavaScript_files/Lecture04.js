const var1 = "hello";

const var2 = "Amit sharma";

// console.log(var1 + var2 + " value");         //this is old method

//console.log(`${var1} my name is ${var2}`);      // this is a new method


//variable decleared method in string IInd method

const var3 = new String("Amit sharma")

// console.log(var3[0])
console.log(var3.__proto__)

console.log(var3.toUpperCase())
console.log(var3.indexOf('t'))
console.log(var3.charAt(2))
console.log(var3.substring(2,7))
console.log(var3.slice(-5,2))


const stringOne = new String("  Amit kumar sharma    ")
console.log(stringOne)
console.log(stringOne.trim())


const url = "http://google.com/Amit%20sharma";

console.log(url.replace('%20', '_'));

console.log(url.includes('amit'))
