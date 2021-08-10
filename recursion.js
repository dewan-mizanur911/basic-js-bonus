/*
let sum = 0;
for(let i = 1; i <= 6; i++){
    sum = sum + i;
}
console.log(sum);

let dSum = 0;
for(let i = 6; i >= 1; i--){
    dSum = dSum + i;
}
console.log(dSum); */

function sum(i){
    if(i == 1){
        return 1;
    }
    return i + sum(i - 1);
}
const myRecNumber = sum(6);
console.log(myRecNumber);
// i + sum(i - 1)
// 6 + sum(5)
// 6 + 5 + sum(4)
// 6 + 5 + 4 + sum(3)
// 6 + 5 + 4 + 3 + sum(2)
// 6 + 5 + 4 + 3 + 2 + sum(1)-condition matched
// 6 + 5 + 4 + 3 + 2 + 1 = 21