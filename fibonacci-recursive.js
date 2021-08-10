// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.....]
/*
const fibo = [0, 1];
for(let i = 2; i <=6; i++){
    fibo[i] = fibo[i -1] + fibo[i - 2];
}
console.log(fibo);
*/

// function fibo(i){
//     if(i == 0){
//         return 0;
//     }
//     if(i == 1){
//         return 1;
//     }
//     return fibo(i - 1) + fibo(i -2);
// }
// console.log(fibo(6));

function fibo(i){
    if(i == 0){
        return [0];
    }
    if(i == 1){
        return [0, 1];
    }
    const fibonacci = fibo(i - 1);

    fibonacci[i] = fibonacci[i - 1] + fibonacci[i -2];
    return fibonacci;
}
console.log(fibo(6));