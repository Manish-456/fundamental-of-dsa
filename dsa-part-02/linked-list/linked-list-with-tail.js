class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
  // Append the new element at the start does not depend on the how many  element present there in the list => Prepend => O(1)
  prepend(val) {
    let node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromTail(){
    if(this.isEmpty()){
        return null;
    }

    const value = this.tail.value;
    if(this.size === 1){
        this.head = null;
        this.tail = null;
    }else{
        let prev = this.head;
        while(prev.next !== this.tail){
            prev = prev.next;
        }
        prev.next = null;
        this.tail = prev;
    }
    this.size --;
  }

  print() {
    if (this.isEmpty()) {
      console.log(`List is empty`);
    } else {
      let curr = this.head;
      let listValue = " ";
      while (curr) {
        listValue += `${curr.value}, `;
        curr = curr.next;
      }

      console.log(listValue);
    }
  }
}


module.exports = LinkedList;