function fibonacciIterative(n) {
    if (n < 2) return n;
    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

function fibonacciIterative2(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }

    return arr[n];
}//O(n)




function fibonacciIterativeRecursive(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciIterativeRecursive(n - 1) + fibonacciIterativeRecursive(n - 2);
}
//O(2^N) Exponential

const input = 45;
console.log(fibonacciIterative(input));
console.log(fibonacciIterative2(input));
console.log(fibonacciIterativeRecursive(input));