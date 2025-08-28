function hasPairWithSum(arr, sum) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                console.log(true);
                return true;
            }
        }
    }
    console.log(false);
    return false;
}


function hasPairWithSum2(arr, sum) {
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i]))
        {
            console.log(true);
            console.log(mySet);
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    console.log(false);
    return false;
}

const arr = [6, 4, 3, 2, 1, 7];
const sum = 15;

hasPairWithSum(arr, sum);
hasPairWithSum2(arr, sum);
