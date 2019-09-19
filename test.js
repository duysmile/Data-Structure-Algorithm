

function getWays(n, w) {
    // init array
    const dp = [];
    for (let i = 0; i < n + 1; i++) {
        for (let j = 0; j < w.length; j++) {
            if (!dp[i]) {
                dp[i] = [];
            }
            if (i === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = 0;
            }
        }
    }

    for (let i = 1; i < n + 1; i++) {
        for (let j = 0; j < w.length; j++) {
            const x = i - w[j] >= 0 ? dp[i - w[j]][j] : 0;
            const y = j - 1 >= 0 ? dp[i][j - 1] : 0;
            dp[i][j] = x + y;
        }
    }

    console.log(dp);
}

function fibonacciModified(t1, t2, n) {
    const dp = [];
    dp[0] = t1;
    dp[1] = t2;
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] * dp[i - 1] + dp[i - 2];
    }
    console.log(dp);
    return BigInt(dp[n - 1]);
}

// getWays(4, [1, 2, 3]);
fibonacciModified(0, 1, 20);