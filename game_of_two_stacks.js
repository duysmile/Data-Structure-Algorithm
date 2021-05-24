// https://www.hackerrank.com/challenges/game-of-two-stacks/problem
function twoStacks(maxSum, a, b) {
    // Write your code here
    let indexA = 0;
    let indexB = 0;
    let sum = 0;
    let count = 0;
    
    while(sum + a[indexA] <= maxSum && indexA < a.length) {
        sum += a[indexA];
        indexA++;
    }
    
    while(sum + b[indexB] <= maxSum && indexB < b.length) {
        sum += b[indexB];
        indexB++;
    }
    
    count = indexA + indexB;
    while(true) {
        while(indexA > 0 && sum + b[indexB] > maxSum) {
            sum -= a[indexA - 1];
            indexA--;
        }
        
        if(sum + b[indexB] > maxSum || indexB > b.length - 1) break;
        sum = sum + b[indexB];
        indexB++;
        count = Math.max(count, indexA + indexB);
    }
    
    return count;
}
