const user = {

    username: "amit",
    price: 999,

    welcomeMassage: function () {

        console.log(`${this.username}, welcome to our website`)
        //console.log(this);
    }

}
//user.welcomeMassage()
//console.log(user.username)
//user.username = "sam";
//user.welcomeMassage();
//console.log(this)



// function chai() {
//     username : "shyam"; 
//     console.log(this.username);
// }
// chai()

// const chai = function() {

//     username : "shyam"; 
//     console.log(this.username);
// }
// chai()


const chai = () => {

    username: "shyam";
    console.log(this);
}
//chai()

// const addone = (num1, num2) => {                  //first method for arrow function
//     return num1 + num2;
// }

// const addone = (num1, num2) => num1 + num2;         //second method for arrow function

//const addone = (num1, num2) => (num1 + num2);           //Third method for arrow function

const addone = (num1, num2) => ({naam : "amit"}) 

console.log(addone(2, 4))