// https://www.hackerrank.com/challenges/greedy-florist/problem

function getMinimumCost(k, c) {
    let arr = c.sort((a, b) => a - b);
    let sum = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        sum += Math.floor((arr.length - i - 1) / k + 1) * arr[i];
    }

    return sum;
}

const cost = [1, 3, 5, 7, 9];
const k = 3;
console.log(getMinimumCost(k, cost));