// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
class Node {
  next;
  prev;
  child;
  data;
}

class DoubleLL {
  head;
  tail;
  length;
  constructor() {
    // console.log('called');
  }

  getHead = () => this.head;
  setHead = (head) => this.head = head;
  getNthNode = (nth) => {
    let index = 1;
    let curr = this.head;
    while(index < nth){
      curr = curr.next;
      index++;
    }
    // console.log(curr.data);
    return curr;
  }
  append(data) {
    this.length++;
    if(!this.head) {
      this.head = new Node();
      this.head.data = data;
      this.tail = this.head;
      return this.length;
    }
    let temp = new Node();
    temp.data = data;
    this.tail.next = temp;
    temp.prev = this.tail;
    this.tail = temp;
    return this.length; 
  }
  setChild = (node,child) => {
    node.child = child;
  }
  print = () => {
    let curr = this.head;
    let msg = '[ ';
    while(curr) {
      msg += curr.data + ', ';
      // let child = curr.child;
      // while(child) {
      //   msg += child.data + ', ';
      //   child = child.next;
      //   // console.log('Yes');
      // }
      curr = curr.next;
    } 
    msg = msg.slice(0,-2);
    msg += ' ]'
    console.log(msg);
  } 
  flatList(head) {
    if(!head) return head;
    let curr = head;
    while(curr) {
      let child = curr.child;
      if(child) {
        let temp = curr.next;
        curr.next = child;
        child.prev = curr;
        curr.child = null;
        while(child.next) 
          child = child.next;
        // console.log(curr.data);
        child.next = temp;
        if(temp) temp.prev = child;
      }
      curr = curr.next;
    }
  }
}

const ll = new DoubleLL();
ll.append(1);
// ll.append(2);
// ll.append(3);
// ll.append(4);
// ll.append(5);
// ll.append(6);

const ll1 = new DoubleLL();
ll1.append(7);
// ll1.append(8);
// ll1.append(9);
ll.setChild(ll.getNthNode(1),ll1.getHead());
const ll2 = new DoubleLL();
ll2.append(10);
// ll2.append(11);
ll1.setChild(ll1.getNthNode(1),ll2.getHead());
// ll.print();
// const ll3 = new DoubleLL();
// ll3.append(12);
// ll3.append(13);
// ll.setChild(ll.getNthNode(1),ll3.getHead());
ll.flatList(ll.getHead());
ll.print();
// ll.observeList();

