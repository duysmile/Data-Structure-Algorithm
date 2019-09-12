// Problem: https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(arr) {
    const arrLength = arr.length;
    const result = {};
    for (let i = 0; i < arrLength; i++) {
        if (!result[arr[i]]) {
            result[arr[i]] = 0;
        }
        result[arr[i]] += 1;
    }

    const maxLength = Object.keys(result).reduce((res, item) => {
        // const before = result[item - 1] ? result[item - 1] : 0;
        const after = result[item + 1] ? result[item + 1] : 0;

        return Math.max(res, result[item] + after, result[item]);
    }, 0);

    return maxLength;
}

// const arrStr = '66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66 66';
// const arrStr = '4 97 5 97 97 4 97 4 97 97 97 97 4 4 5 5 97 5 97 99 4 97 5 97 97 97 5 5 97 4 5 97 97 5 97 4 97 5 4 4 97 5 5 5 4 97 97 4 97 5 4 4 97 97 97 5 5 97 4 97 97 5 4 97 97 4 97 97 97 5 4 4 97 4 4 97 5 97 97 97 97 4 97 5 97 5 4 97 4 5 97 97 5 97 5 97 5 97 97 97';
const arr = arrStr.split(' ');
// const arr = [1,1,2,2,4,4,5,5,5];
// const arr = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(arr));