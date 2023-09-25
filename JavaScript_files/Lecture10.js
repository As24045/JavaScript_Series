// object singleton

const tinderUser = new Object()               //it is singleton object

// const tinderUser = {}                           //it not a singleton object

tinderUser.id = "123ads"
tinderUser.name = "amit"
tinderUser.isLoggledIn = false

//console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        fullUsername: {
            firstName: "Amit sharma",
            lastname : "sharma"
        }
    }
}

//console.log(regularUser.fullname.fullUsername.firstName);

const obj1 = {1 : "a", 2 : "s", 3 : "d"}
const obj2 = {4 : "a", 5 : "s", 6 : "d"}

//const obj3 =Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}

//console.log(obj3)

//console.log(tinderUser);

//console.log(Object.keys(tinderUser))           //imp
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('isLoggledIn'));               //output == true
//console.log(tinderUser.hasOwnProperty('isLoggled'));                 //output == false



const course = {

    courseName : "Web Developement",
    price : "999",
    purachase : "Amit Sharma"
}

const {purachase : pur} = course

//console.log(purachase)

console.log(pur)