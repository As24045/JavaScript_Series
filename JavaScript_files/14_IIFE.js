//Immediately Invoked Function Expressions {IIFE}

(function chai() {

    //we called him named IIFE
    console.log("db conction");
})();

((name) =>{
    //It is a simple IIFE
    console.log(`db Don ${name}`);
})("Amit")
