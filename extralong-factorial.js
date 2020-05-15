// Tính giai thừa

function extraLongFactorial(n) {
    const result = [1];
    let i = 2;
    for (; i <= n; i++) {
        for (let j = 0; j < result.length; j++) {
            result[j] = result[j] * i;
        }

        for (let j = 0; j < result.length; j++) {
            const cell = result[j];
            if (cell < 10) {
                continue;
            }

            if (result.length === j + 1) {
                result.push(parseInt(result[j] / 10));
            } else {
                result[j + 1] += parseInt(result[j] / 10);
            }

            result[j] %= 10;
        }
    }

    result.reverse();
    return result.reduce((res, number) => `${res}${number}`, '');
}

const n = 20;

console.log(extraLongFactorial(n));
