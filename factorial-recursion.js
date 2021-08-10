// 6! = 1 * 2 * 3 * 4 * 5 * 6
/*
let factorial = 1;
for( let i = 6; i >= 1; i--){
    factorial = factorial * i;
}
console.log(factorial); */

function factorial(i){
    if(i == 1){
        return 1;
    }
    return i * factorial(i - 1);
}
console.log(factorial(6));

// i * factorial(i - 1)
// 6 * factorial(5)
// 6 * 5 * factorial(4)
// 6 * 5 * 4 * factorial(3)
// 6 * 5 * 4 * 3 * factorial(2)
// 6 * 5 * 4 * 3 * 2 * factorial(1)-condition matched
// 6 * 5 * 4 * 3 * 2 * 1 = 720