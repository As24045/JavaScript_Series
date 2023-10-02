//for
for (let i = 0; i < 10; i++) {
    const element = i;
   // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {

    //console.log(`outer loop : ${i}`)
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop : ${j} and inner loop ${i}`)
        //console.log(i +"*"+ j +"="+ i*j)
        
    }
}
let superHero = ['Amit', 'rohit', 'virat', 'bumrah'];
//console.log(superHero.length);

for (let index = 0; index < superHero.length; index++) {

    const element = superHero[index];
  //  console.log(element);
}

for (let i = 1; i <=20; i++) {

    if (i==5) {
       // console.log('detected of 5');
        break
        
    }
   // console.log(`value is ${i}`);
    
}
for (let i = 1; i <=20; i++) {

    if (i==5) {
       console.log('detected of 5');
        continue
        
    }
   console.log(`value is ${i}`);
    
}