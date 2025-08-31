

const climbStairsFn = function(n) {
    if(n<=2) return n;
    return climbStairsFn(n-1) + climbStairsFn(n-2);
};

// console.log(climbStairsFn(3)); // 3


function climbStairsGenerator() {
    // Closure captures results & helper
    function generate(n,steps) {
        let results = [];

        function backtrack(remaining, path) {
            if (remaining === 0) {
                results.push([...path]);
                return;
            }
            if (remaining < 0) return;


            // Take 1 step
            path.push(1);
            backtrack(remaining - 1, path);
            path.pop();

            // Take 2 steps
            path.push(2);
            backtrack(remaining - 2, path);
            path.pop();
        }

        backtrack(n, []);
        return results;
    }

    // Return a closure that provides both count and ways
    return function(n) {
        const ways = generate(n);
        return {
            count: ways.length,
            ways: ways
        };
    };
}

// Create the closure instance
const climbStairs = climbStairsGenerator();

// Usage
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(10));