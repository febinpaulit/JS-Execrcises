
const array = [99, 44, 6, 2, 1, 5];

function selectionSort(arr) {
    console.log("Before:", arr);
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
       
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        console.log("Step", i + 1, ":", arr);
    }
    console.log("After:", arr);
}

selectionSort(array);