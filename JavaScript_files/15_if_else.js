const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard ) {
    //console.log("It is true");
}

const loggedInWithGoogle = false;
const loggedInWithEmail = true;

if (loggedInWithGoogle || loggedInWithEmail) {

    //console.log("itis true");
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;

// switch (month) {
//     case 1 :
//     console.log("january");
        
//         break;

//         case 2:
//         console.log("February");

//         break;

//         case 3:
//         console.log("March");

//         break;

//         case 4:
//         console.log("April");

//         break;

//         case 5:
//         console.log("May");

//         break;

//         case  6:
//         console.log("June");

//         break;

//         case  7:
//         console.log("July");

//         break;

//         case  8:
//         console.log("August");

//         break;

//         case  9:
//         console.log("September");

//         break;

//         case  10:
//         console.log("October");

//         break;

//         case  11:
//         console.log("November");

//         break;

//         case 12 :
//         console.log("december");

//     default: 
//     console.log("invailed month");
//         break;
// }

// const weekday = "sun";

// switch (weekday) {
//     case "sun":
//         console.log("1");
//         break;

//         case "mon":
//             console.log("2");
//         break;

//         case "Tue":
//             console.log("3");
//         break;

//         case "wed":
//             console.log("4");
//         break;

//         case "thu":
//             console.log("5");
//         break;

//         case "fri":
//             console.log("6");
//         break;

//         case "sat":
//             console.log("7");
//         break;

//     default:
//         console.log("invailed week day")
//         break;
// }



const userEmail = [];

if (userEmail) {
   // console.log("user loggedin now");
    
}
else {
    //console.log("Don't have any Email");
}

//falsy value ****************************************************************************************

// false, 0, -0, NaN, undefined, null, BigInt 0n


//truthy value 

//  "0", 'false', " ", [], {}, function(){}


if (userEmail.length === 0) {
    console.log("array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {

    console.log("this is empty object");
}



// Nillish Coalescing Operator (??) : null undefined*********************************************************************

let val1;
//val1 = 15 ?? 10
//val1 = null ?? 5
//val1 = undefined ?? 10
val1 = null ?? 15 ??10

console.log(val1)


//terniary Operator******************************************************************************************************

//condition ? true : false++++++++++++++++++++++++++++++++++

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("greater then 80") : console.log("less then 80");