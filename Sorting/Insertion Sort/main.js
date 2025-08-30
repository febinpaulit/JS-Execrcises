const array = [99, 6, 2, 1, 5,0];

function insertionSort(arr) {
    console.log("Before:", arr);
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] < arr[0]) {
            arr.unshift(arr.splice(i, 1)[0]);
        }
        else {
            for (let j = 1; j < i; j++) {
                if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
                    arr.splice(j, 0, arr.splice(i, 1)[0]);
                }
            }
        }
        console.log("Step", i + 1, ":", arr);
    }
    console.log("After:", arr);
}

//insertionSort(array);



function insertionSort1(arr) {
    console.log("Before:", arr);

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];   // the element we want to insert
        let j = i - 1;

        // shift larger elements one position to the right
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // insert current into its correct place
        arr[j + 1] = current;

        console.log("Step", i, ":", arr);
    }

    console.log("After:", arr);
    return arr;
}


insertionSort1(array);