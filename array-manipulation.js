// https://www.hackerrank.com/challenges/crush/problem

function manipulateArray(n, queries) {
    const arr = Array(n).fill(0);
    const lengthQueries = queries.length;

    for (let i = 0; i < lengthQueries; i++) {
        const [p, q, sum] = queries[i];
        arr[p - 1] += sum;
        if (q <= n) {
            arr[q] -= sum;
        }
    }

    let max = 0;
    let x = 0;
    for (let i = 0; i < n; i++) {
        x += arr[i];
        if (max < x) {
            max = x;
        }
    }

    return max;
}

const n = 10;
const queries = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
];

console.log(manipulateArray(n, queries));
