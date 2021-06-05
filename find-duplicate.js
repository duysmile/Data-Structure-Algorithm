// https://leetcode.com/problems/find-the-duplicate-number/

// Use Floyd's cycle finding algorithm
// Explaination: https://www.codingninjas.com/blog/2020/09/09/floyds-cycle-detection-algorithm/

function findDuplicate(arr) {
    let slow = 0;
    let fast = 0;
    let finder = 0;

    while (true) {
        slow = arr[slow];
        fast = arr[arr[fast]];

        if (slow === fast) {
            break;
        }
    }

    while (true) {
        slow = arr[slow];
        finder = arr[finder];
        if (slow === finder) {
            return finder;
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6, 1];

console.log(findDuplicate(arr));
