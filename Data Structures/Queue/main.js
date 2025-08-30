class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this;
    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        if(this.first === this.last){
            this.last = null;
        }

        this.first = this.first.next;
        this.length--;
        return this;
    }
}

// const myQueue = new Queue();
// console.log(myQueue.enqueue('Joy'));
// console.log(myQueue.enqueue('Matt'));
// console.log(myQueue.enqueue('Pavel'));
// console.log(myQueue.enqueue('Samir'));
// console.log(myQueue.peek());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());


class CrazyQueue {
    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value) {
        const length = this.first.length;

        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }

        this.last.push(value);

        return this;
    }

    dequeue() {
        const length = this.last.length;

        for (let i = 0; i < length; i++) {
            this.first.push(this.last.pop());
        }

        this.first.pop();

        return this;
    }

    peek() {
        if (this.first.length > 0) {
            return this.first[this.first.length - 1];
        }

        return this.last[0];
    }
}

const myQueue = new CrazyQueue();
console.log(myQueue.peek());
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
console.log(myQueue.peek());
console.log("========");
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log("========");
console.log(myQueue.peek());

console.log(myQueue);