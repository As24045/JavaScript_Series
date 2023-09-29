let a = 200;

if (true) {
    let a = 2
//    console.log("inner = ",a)
}
console.log(a);

function one() {
     const username = "amit";
     
     function two() {
        const website = "youtube";
      //  console.log(username);
        
     }
     //console.log(website)                         //does not asses

    two()
    
}
one()

if (true) {
    const companyname = "sachin sharma";
   if (companyname === "sachin sharma") {

    const company = " google";
    //console.log(companyname + company);
   }  
  // console.log(company);                       //we can not acces here
}
// console.log(companyname);                       //we can not acces here

//console.log(addone(5));                          //we can acces before the function decleration
function addone(num) {
    return num + 1
}


//console.log(addTwo(5));                       //here we can not acces here
const addTwo = function(num) {

    return num + 2;
}
