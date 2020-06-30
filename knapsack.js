// Reference: https://medium.com/@fabianterh/how-to-solve-the-knapsack-problem-with-dynamic-programming-eb88c706d3cf

const val = [10, 40, 30, 50];
const wt = [5, 4, 6, 3];

const capacity = 10;
const w = wt.length;

const result = [];

for (let i = 0; i < w + 1; i += 1) {
  result.push([0]);
}

for (let i = 0; i < capacity + 1; i += 1) {
  result[0][i] = 0;
}

for (let item = 1; item < w + 1; item += 1) {
  for (let cap = 1; cap < capacity + 1; cap += 1) {
    const maxWithoutCurr = result[item - 1][cap];
    let maxWithCurr = 0;
    const itemWeight = wt[item - 1];
    const value = val[item - 1];
    if (cap >= itemWeight) {
      const remainWeight = cap - itemWeight;
      const maxWithWeight = result[item - 1][remainWeight];
      maxWithCurr = value + maxWithWeight;
    }

    result[item][cap] = Math.max(maxWithoutCurr, maxWithCurr);
  }
}

console.log(result[w][capacity]);
