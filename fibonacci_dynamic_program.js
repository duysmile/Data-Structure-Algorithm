
function fib(n) {
    const data = [];
    data[0] = 0;
    data[1] = 1;
    for (let i = 2; i < n; i++) {
        data[i] = data[i - 1] + data[i - 2];
    }
    return data[n - 1];
}

console.log(fib(50));

// function normalFib(n) {
//     if (n == 1) return 0;
//     if (n == 2) return 1;
//     return normalFib(n - 1) + normalFib(n - 2);
// }

// console.log(normalFib(50));

// memoization
// const arr = {0: 0, 1: 1};
// function memoizationFib(n) {
//     if (arr[n] === undefined) {
//         arr[n] = memoizationFib(n - 1) + memoizationFib(n - 2); 
//     }
//     return arr[n];
// }

// memoizationFib(15)

// test benchmark: http://jsben.ch/4HUTB