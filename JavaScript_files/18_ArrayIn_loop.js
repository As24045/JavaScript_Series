//forof loop

Number = [1,2,3,4,5]

for (const num of Number) {
    //console.log(num);
}

const greating = "hellow word";

for (const great of greating) {
    console.log(great);
}


const map = new Map()
map.set('In',"India");
map.set('usa', "America");
map.set('fr', "france");
//map.set('fr', "france");

//console.log(map);

for (const [key, value] of map) {
//    console.log(key, ":-", value);
    
}

// const myObject = {

//     "name": "Amit sharma ",
//     "class" : "2"                                        //for of does no use this types
// }

// for (const [key, value] of myObject) {
    
//     console.log(key, value)
// }




//for In Loop***********************************************************************************************************

const player = {
    Hitman : "Rohit sharma",
    chiku : "virat kohli",
    sky : "surya kumar yadav"
}

for (const key in player) {
   
    //console.log(`${key} and nickname ${player[key]}`);

        
    }






    //for each loop******************************************************************************************************

    const coding = ['java', 'python', 'javascript', 'c++'];
    
    // coding.forEach( function (val) {
    //         console.log(val);
   // })

                 //or
    
    coding.forEach( (val) => {
        //console.log(val);
    })


    function printMe(item) {
        //console.log(item)

    }

    coding.forEach(printMe)


    coding.forEach( (item, index, arr) => {
        console.log(item, index, arr);
    })


    const myCoding = [

        {
            codingLanguage : "JavaScript",
            fileName : "js"
        },
        {
            codingLanguage : "Java",
            fileName : "java"
        },
        {
            codingLanguage : "PHP",
            fileName : "php"
        }
    ]

    myCoding.forEach( (item) =>{

        console.log(item.codingLanguage);
    })