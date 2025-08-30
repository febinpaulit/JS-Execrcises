
const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(arr) {
    console.log(arr);
    let swapped = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
         if (!swapped) break;
    }

    console.log(arr);
}

bubbleSort(array);

//Worst & Average: O(n^2)
//Best (already sorted with early break): O(n)