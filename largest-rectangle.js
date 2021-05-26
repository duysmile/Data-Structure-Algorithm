// https://www.hackerrank.com/challenges/largest-rectangle/problem
function largestRectangle(h) {
    // Write your code here
    let max = 0;
    const stack = [];
    let i = 0 ;
    
    while(i < h.length) {
        console.log("index:", i, " value:", h[i]);
        while (stack.length == 0 || h[stack[stack.length - 1]] <= h[i]) {
            stack.push(i);
            i++;
        }
        
        const top = stack.pop();
        const subCount = stack.length == 0 ? i : (i - stack[stack.length - 1] - 1);
        const sum = h[top] * subCount;
        console.log(sum);
        max = Math.max(max, sum);
    }
    
    while(stack.length > 0) {
        const top = stack.pop();
        const subCount = stack.length == 0 ? i : (i - stack[stack.length - 1] - 1);
        const sum = h[top] * subCount;
        // console.log(sum);
        max = Math.max(max, sum); 
    }
    
    return max;
}
