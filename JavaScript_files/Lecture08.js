const Ind_bat = ["Rohit", "Virat", "Gill"];
const Ind_bol = ["Kuldeep","Bumrah","Siraj"];
const Ind_all = ["Hardik","Jadeja","Axar"];

// Ind_bat.push(Ind_all,Ind_bol);
 
// console.log(Ind_bat)
// console.log(Ind_bat[3][2])

// const Ind_teams=Ind_bat.concat(Ind_all,Ind_bol);
// console.log(Ind_teams)

//const Ind_team = [...Ind_bat, ...Ind_all, ...Ind_bol]
// console.log(Ind_team)

const arr = [2,4,5,[4,5,5],5,2,[434,2,[90,[90,[90,[90,[90,[90,[90]]]]]]]]];
const arr2 = arr.flat(Infinity)

//console.log(arr2)

console.log(Array.isArray("Amit Sharma"))
console.log(Array.from('Amit sharma'))                 //change in array

console.log(Array.from({name:  'Amit sharma'}))  // if it is not converd in array so givin a empty breaket

let score = 200;
let score2 = 300;

console.log(Array.of(score, score2))
