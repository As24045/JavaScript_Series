//filter *******************************************************************************************************


const coding = ['java', 'python', 'javascript', 'c++'];

// const values = coding.forEach( (item) => {                 //
//     console.log(item)                                      //
//     return item;                                           //
// })                                                         // we can not acces this types 
                                                              //                                                              
// console.log(values);                                       //



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

const newNums = myNums.filter( (num) => 
{ return num > 4})
//console.log(newNums);



const Books = [

    {title : "book one", genra : "Hindi", publish : "1990", edition : "1998"},
    {title : "book two", genra : "computers", publish : "1890", edition : "1999"},
    {title : "book tree", genra : "math", publish : "1980", edition : "1996"},
    {title : "book four", genra : "physics", publish : "1999", edition : "2000"},
    {title : "book five", genra : "chemistry", publish : "1989", edition : "1998"},
    {title : "book six", genra : "Hindi", publish : "1945", edition : "1998"},
    {title : "book seven", genra : "science", publish : "1970", edition : "1998"},
    {title : "book eight", genra : "Hindi", publish : "1934", edition : "1998"},
    {title : "book nine", genra : "History", publish : "1953", edition : "1998"},
    {title : "book ten", genra : "art", publish : "1936", edition : "1998"}
];


const allBooks = Books.filter( (bk) => bk.genra === "Hindi");
//console.log(allBooks);

let publishDate = Books.filter ( (pub) => {
    return pub.publish >= 1990;
}) 

//console.log(publishDate)

publishDate = Books.filter( (can) => { return can.publish >= 1990 && can.genra === "Hindi"})

//console.log(publishDate)




//map method ***************************************************************************************************************************


let  MyNewNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNumbers= MyNewNumbers.map( (nam) => {
//     return  nam + 10;
// });

let newNumbers = MyNewNumbers.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num >50)
//console.log(newNumbers);


//Reduce method **************************************************************************************************************************


let myNum = [1, 2, 3];

// let myTotal = myNum.reduce(function(acc, currval) {
//     console.log(` acc value ${acc} and currval ${currval}`);
//     return acc + currval;
// }, 0);



let myTotal = myNum.reduce( (arr, currval) => arr + currval, 0)
console.log(myTotal);


let shopingCard = [
    {
        courseName : "js course",
        coursePrice : 999
    },

    {
        courseName : "html course",
        coursePrice : 1999
    },

    {
        courseName : "css course",
        coursePrice : 3999
    },

    {
        courseName : "python course",
        coursePrice : 599
    }
];

 let payPrice= shopingCard.reduce( (acc, item) => acc + item.coursePrice, 0);

 console.log(payPrice);