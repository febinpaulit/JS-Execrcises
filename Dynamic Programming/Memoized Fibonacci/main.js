let caculations = 0;


function fibonacci(n) {
    caculations++;
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


function fibonacciMaster() {

    let cache = {};
    return function fib(n) {
        caculations++;
        if (n in cache)
            return cache[n];
        else {
            if (n < 2) {
                return n;
            }
            else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}

function fibonacci2(n) {
    if (n < 2) {
        return n;
    }
    let answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        caculations++;
        answer.push(answer[i - 2] + answer[i - 1]);
    }
    return answer.pop();
}

const val = 4;
console.log(fibonacci(val));
console.log(`we did calculation - ${caculations}`);
caculations = 0;
const fasterFib = fibonacciMaster();
console.log(fasterFib(val));
console.log(`we did calculation - ${caculations}`);

caculations = 0;
console.log(fibonacci2(val));
console.log(`we did calculation - ${caculations}`);