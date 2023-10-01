const LinkedList = require("./linked-list-with-tail.js");

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    this.list.print();
  }
};

const stack = new Stack();
stack.push(4)
stack.push(5)
stack.push(6)
stack.pop()
stack.print()
console.log(stack.peek())
