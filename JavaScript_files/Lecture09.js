//object Lietrals

const mySym = Symbol("Key1")


const JsUser = {
    name : "Amit",
    [mySym] : "Key1",                                          //here asses a symbol from this method
    class: "Bsc final years",
    location: "Jaunpur",
    IsLoggedIn: false,
    email : "as2404566@goggle.com"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym])
// console.log(JsUser)
JsUser.email = "Amit@Chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "Amit@microsoft.com";
// console.log(JsUser.email)

JsUser.greeting = function(){
    console.log(`Hellow world ${this.name}`);
}

JsUser.greetingTwo = function(){
    console.log("Hellow world");
}
 console.log(JsUser.greeting())
 console.log(JsUser.greetingTwo())
