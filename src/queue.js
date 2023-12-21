const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
   constructor(){
   }

  head = null;
  tail = null;
   

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let queue = new ListNode(value)
    if(!this.tail){
      this.head = queue
      this.tail = queue;
    }
    else{
      this.tail.next = queue;
      this.tail = queue;
    }
  }

  dequeue() {
    if(!this.head){
      return null;
    }
    
    let val = this.head.value

    if(this.head.next){
      this.head = this.head.next
    }
    else{
      this.head = null;
      this.tail = null;
    }
    return val
  }

}

module.exports = {
  Queue
};
