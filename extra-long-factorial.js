// https://www.hackerrank.com/challenges/extra-long-factorials/problem
functione extraLongFactorial(n) {
  let result = [1];
  let carry = 0;
  let k = 0;

  for(let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      const temp = result[j] * i + carry;
      carry = parseInt(temp / 10);
      result[j] = temp % 10;
    }
    while(carry) {
      const temp = carry % 10;
      carry = parseInt(carry / 10);
      k++;
      result[k] = temp;
    }
  }

  console.log(result);  
  return result.reverse().join("");
}
