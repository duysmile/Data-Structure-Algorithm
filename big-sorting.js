// https://www.hackerrank.com/challenges/big-sorting/problem

function bigSorting(arr) {
    return quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, left, right) {
    if (left < right) {
        const pivot = partition(arr, left, right);

        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }

    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (compare(arr[j], pivot) === -1) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, right);
    return i + 1;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function compare(numStr1, numStr2) {
    if (numStr1.length > numStr2.length) {
        return 1;
    } else if (numStr1.length < numStr2.length) {
        return -1;
    }

    for (let i = 0; i < numStr1.length; i++) {
        if (numStr1[i] > numStr2[i]) {
            return 1;
        } else if (numStr1[i] < numStr2[i]) {
            return -1;
        }
    }
    return 0;
}

const arr = ['1', '3', '4', '2', '8', '6', '12', '0'];

console.log(bigSorting(arr));
