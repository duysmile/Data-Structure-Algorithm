/*
Giả sử chúng ta có n đồng xu nặng lần lượt là W1, W2, ..., Wn, 
và bài toán đặt ra là tìm số lượng đồng xu nhỏ nhất để tổng khối lượng 
của chúng là một giá trị S. Tất nhiên, số lượng đồng xu là không giới hạn.

Ví dụ với n = 3, S = 11, W = [1, 3, 5].

* Bắt đầu với bài toán con 0 ta có dp(0) = 0
* Với bài toán con 1, có 1 đồng xu (nặng 1) có thể thêm vào từ 0 đồng xu nào cả. Vậy dp(1) = dp(0) + 1 = 1.
* Với bài toán con 2, cũng chỉ có 1 đồng xu (nặng 1) có thể thêm vào từ 1 đồng xu. Vậy dp(2) = dp(1) + 1 = 2.
* Với bài toán con 3, chúng ta có thể thêm 1 đồng xu 3 vào 0 đồng xu hoặc thêm 1 đồng xu 1 vào 2 đồng xu.
* Rõ ràng là cách đầu tiên cho kết quả nhỏ hơn. Vậy dp(3) = min(dp(2) + 1, dp(0) + 1) = min(3, 1) = 1
* …
* Cứ tiếp tục như vậy cho đến bài toán S chính là đáp án chúng ta cần tìm.
*/


const n = 3;
const S = 4;
const W = [1, 2, 3];

// dp: dynamic programming

function findMinWayToGetS(n, S, W) {
    const dp = [];
    const sample = [0];
    dp[0] = {
        turn: 0,
        value: []
    };
    for (let i = 1; i <= S; i++) {
        sample.push(i);
        dp[i] = W.reduce((result, data) => {
            if (i >= data ){
                return {
                    turn: Math.min(result.turn, dp[i - data].turn),
                    value: [...dp[i - data].value, data]
                };
            }
            return result;
        }, {
            turn: Number.MAX_SAFE_INTEGER,
            value: []
        });
        dp[i].turn += 1;
    }

    const sum = dp[S].value.reduce((res, item) => {
        return res + item;
    }, 0);
    if (sum !== S) {
        return console.log('INVALID_INPUT_DATA');
    }
    console.log(sample);
    console.log(dp, '|=>', dp[S]);
}

findMinWayToGetS(n, S, W);

// Tìm số cách khác nhau để chọn ra các đồng xu sao cho tổng khối lượng của chúng là S.
function findAllWayToGetS(n, S, W) {
    const dp = [];
    dp[0] = 1;
    for (let i = 1; i <= S; i++) {
        dp[i] = W.reduce((result, item) => {
            if (i >= item) {
                return result + dp[i - item];
            }
            return result;
        }, 0);
    }

    console.log(dp, dp[S]);
}

findAllWayToGetS(n, S, W);

/* 
    Tìm số cách khác nhau để chọn ra các đồng xu sao cho tổng khối lượng của chúng là S.
    Với điều kiện, các cách lấy đồng xu là hoán vị của nhau không được coi là khác nhau.
    Bài toán này khó hơn bài toán trước một chút.
    Nếu chúng vẫn chia các bài toán con như cũ thì không thể có được cấu trúc con tối ưu.
    Ví dụ, với các đồng xu 1, 3, 5 thì (1, 3) và (3, 1) đều cho kết quả là 4 nhưng chỉ được coi là 1 cách.

    Với bài toán này, chúng ta sẽ chia bài toán lớn thành các bài toán con theo một cách tương đối khác.
    Chúng ta thấy rằng, kết quả (số cách chọn đồng xu) sẽ là tổng hợp của hai kết quả:
  * Số cách lấy đồng xu từ n - 1 đồng xu đầu tiên, tức là chúng ta coi như không có đồng xu nặng nhất
  * Số cách lấy đồng xu có chứa đồng xu nặng nhất.
*/
function findAllWayDifToGetS(n, S, W) {
    const dp = [];
    for (let i = 0; i < S + 1; i++) {
        for (let j = 0; j < n; j++) {
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

    for (let i = 1; i < S + 1; i++) {
        for (let j = 0; j < n; j++) {
            let x = 0;
            let y = 0;
            if (i >= W[j]) {
                x = dp[i - W[j]][j];
            }
            if (j >= 1) {
                y = dp[i][j - 1];
            }

            dp[i][j] = x + y;
        }
    }

    console.log(dp, dp[S][n - 1]);
}

findAllWayDifToGetS(n, S, W);

// https://www.youtube.com/watch?v=Y0ZqKpToTic -> tutorial coin changing minimum