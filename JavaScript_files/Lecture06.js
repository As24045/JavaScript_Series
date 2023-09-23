//Dates

let myDate = new Date()


// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.getTimezoneOffset);
// console.log(myDate.toUTCString());
// console.log(myDate);


// console.log( typeof myDate);


//let myNewDate = new Date(2023,90,56)
//let myNewDate = new Date(2023,0,23,12,45)
let myNewDate = new Date("12,07,2023")
//console.log(myNewDate.toLocaleString());


let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myNewDate.getTime());

//console.log(Math.floor(Date.now()/1000));                                           //mili second to second value 

let newDate = new Date()

// console.log(newDate.getDate());
// console.log(newDate.getFullYear());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.getUTCMilliseconds());
// console.log(newDate.getMonth());

//console.log(`${newDate.getDate()} / ${newDate.getMonth() + 1} / ${newDate.getFullYear()}`)

newDate.toLocaleString('deafult',{

    weekday : "long",
    era : "long"
})


