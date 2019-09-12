// https://www.hackerrank.com/challenges/angry-children/problem

function maxMin(k, arr) {
    const arrSorted = arr.slice().sort((a, b) => a - b);
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arrSorted.length - k + 1; i++) {
        min = Math.min(min, arrSorted[k + i - 1] - arrSorted[i]);
    } 
    return min;
}

const k = 8;
const arrStr = `6327
571
6599
479
7897
9322
4518
571
6677
7432
815
6920
4329
4104
7775
5708
7991
5802
8619
6053
7539
7454
9000
3267
6343
7165
4095
439
5621
4095
153
1948
1018
6752
8779
5267
2426
9649
2190
9103
7081
3006
2376
7762
3462
151
3471
1453
2305
8442`;
const arr = arrStr.split('\n');

console.log(maxMin(k, arr));