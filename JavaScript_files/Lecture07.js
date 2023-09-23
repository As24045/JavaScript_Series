//Arrays

const firstArr = [7,3,4,4,5];

//console.log(firstArr[2]);

//Array method

firstArr.push(6);                   //add the first value of array                            
//console.log(firstArr)
firstArr.pop();   
firstArr.pop();                    //remove the last value of array
//console.log(firstArr)

firstArr.unshift(7)             //Add the element in the starting of arry             
firstArr.shift()                   //remove the element in the starting of arry             
//console.log(firstArr);


// console.log(firstArr.includes(30))
// console.log(firstArr.indexOf(30))
// console.log(firstArr.indexOf(3))

const newArray = firstArr.join()   //join method changes to array to string
//console.log(firstArr)
//console.log(newArray)

console.log(firstArr)

const newArray2 = firstArr.slice(1,3)

console.log(newArray2)


console.log(firstArr)

const newArray3 = firstArr.splice(1,3)
console.log(firstArr)
console.log(newArray3)

