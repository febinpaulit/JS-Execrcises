function findFactorialRecursive(number) {
    if (number === 0 || number === 1) {
        return 1; // Base case
    }
    if (number === 2) {
        return 2; // Base case
    }
    return number * findFactorialRecursive(--number); //recursive case
}
//O(n)

function findFactorialIterative(number) {

    if (number === 0 || number === 1) {
        return 1; // Base case
    }
    if (number === 2) {
        return 2; // Base case
    }
    let factorial = 1;
    for (let i = number; i > 1; i--) {
        factorial *= i;
    }
    return factorial;
}
//O(n)

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));