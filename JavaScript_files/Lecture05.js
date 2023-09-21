//************************************************* Numbers value ************************************************* 


const num = 400;
//console.log(num);

const balance = new Number(400);

//console.log(balance)
//console.log(balance.toString().length)

//console.log(balance.toFixed(2))

const otherNumber = 1283.50

//console.log(otherNumber.toPrecision(4))

const newMethod = 1000000
//console.log(newMethod.toLocaleString())               //anthor county 
//console.log(newMethod.toLocaleString('en-IN'))        // for India 


//************************************************* Maths Values ************************************************* 



// console.log(Math)
// console.log(Math.abs(-4))        //always gives the positive value
// console.log(Math.floor(4.9))     // always gives the minimum value
// console.log(Math.ceil(3.2))      // always gives the maximum value
// console.log(Math.round(4.3))     // always gives the roundfigher value
// console.log(Math.min(2,4,6,7,8))
// console.log(Math.max(2,4,6,7,8))

console.log(Math.random())
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10)+1)


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1))+ min)