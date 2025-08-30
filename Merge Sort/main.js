
const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(
        mergeSort(left), mergeSort(right)
    )
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Compare elements and merge in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// const answer = mergeSort(array);
// console.log(answer);

function mergeSort1(arr, start = 0, end = arr.length - 1) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);

    // Sort left half
    mergeSort1(arr, start, mid);
    // Sort right half
    mergeSort1(arr, mid + 1, end);
    // Merge halves
    merge1(arr, start, mid, end);
}

function merge1(arr, start, mid, end) {
    let leftIndex = start;
    let rightIndex = mid + 1;
    let temp = [];

    // Merge into temp[]
    while (leftIndex <= mid && rightIndex <= end) {
        if (arr[leftIndex] <= arr[rightIndex]) {
            temp.push(arr[leftIndex]);
            leftIndex++;
        } else {
            temp.push(arr[rightIndex]);
            rightIndex++;
        }
    }

    // Copy remaining from left
    while (leftIndex <= mid) {
        temp.push(arr[leftIndex]);
        leftIndex++;
    }

    // Copy remaining from right
    while (rightIndex <= end) {
        temp.push(arr[rightIndex]);
        rightIndex++;
    }

    // Copy sorted values back into original array
    for (let i = 0; i < temp.length; i++) {
        arr[start + i] = temp[i];
    }
}

// Example usage

console.log("Before:", array);
mergeSort1(array);
console.log("After:", array);
