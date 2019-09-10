/* 
    Cho hai xâu ký tự. Tìm độ dài xâu con chung dai` nhất giữa chúng.
    Ví dụ với 2 xâu “quetzalcoatl” và “tezcatlipoca” thì xâu con chung dài nhất sẽ là “ezaloa” với độ dài 6.

    Chúng ta hãy bắt đầu lần lượt các bài toán con.
    Đương nhiên, nếu một trong hai xâu là rỗng thì xâu con chung của chúng cũng rỗng.
    Vậy dp(0, j) = dp(i, 0) = 0. Nếu cả i và j đều dương, chúng ta cần suy xét một vài trường hợp:
    * Nếu ký tự cuối cùng của xâu thứ nhất không có mặt trong xâu con chung dài nhất,
    nó có thể bị bỏ qua mà không ảnh hưởng gì đến kết quả. Công thức ở đây sẽ là dp(i, j) = dp(i - 1, j).
    * Tương tự như trường hợp trên, ký tự cuối cùng của xâu thứ hai không ảnh hưởng đến kết quả thì dp(i, j) = dp(i, j - 1).
    * Trường hợp cuối cùng, nếu hai ký tự cuối cùng của hai xâu x1, x2 đều có mặt trong xâu con chung dài nhất.
    Dĩ nhiên là hai ký tự này phải là một thì điều này mới xảy ra, tức là x1 == x2.
    Trong trường hợp này, khi xoá đi bất cứ một ký tự nào trong hai ký tự đó đều khiến xâu con chung dài nhất ngắn đi 1 ký tự.
    Vậy rõ ràng là dp(i, j) = dp(i - 1, j - 1) + 1.

*/
const s1 = 'quetzalcoatl';
const s2 = 'tezcatlipoca';

const length1 = s1.length;
const length2 = s2.length;

const arrS1 = s1.split('');
const arrS2 = s2.split('');

const lengthsubStr = [[]];
// init 2D array with all 0
for (let i = 0; i < length1; i++) {
    for (let j = 0; j < length2; j++) {
        if (!lengthsubStr[i]) {
            lengthsubStr[i] = [];
        }
        lengthsubStr[i][j] = 0;
    }
}

for (let i = 0; i < length1; i++) {
    for (let j = 0; j < length2; j++) {
        if (arrS1[i] === arrS2[j]) {
            if (i - 1 < 0 || j - 1 < 0) {
                lengthsubStr[i][j] = lengthsubStr[length1 - 1][length2 - 1] + 1;    
            } else {
                lengthsubStr[i][j] = lengthsubStr[i - 1][j - 1] + 1;
            }
        } else {
            let indexI = i - 1 < 0 ? length1 - 1 : i - 1;
            let indexJ = j - 1 < 0 ? length2 - 1 : j - 1;
            
            lengthsubStr[i][j] = Math.max(lengthsubStr[indexI][j], lengthsubStr[i][indexJ]);
        }
    }
}

console.log(lengthsubStr);

console.log(lengthsubStr[length1 - 1][length2 - 1]);
