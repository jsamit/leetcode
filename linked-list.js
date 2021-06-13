class Node {
  next;
  data;
}
class LinkedList {
  head;
  tail;
  length = 0;

  append(data) {
    if(!this.head) {
      this.head = new Node();
      this.head.data = data;
      this.tail = this.head;
      return;
    }
    const temp = new Node();
    temp.data = data;
    this.tail.next = temp;
    this.tail = temp;
    this.length++;
  }
  bulkAppend(data = []) {
    data.forEach(datam => this.append(datam));
  }

  print() {
    let curr = this.head;
    let msg = '[ '
    while(curr) {
      msg += curr.data + ', '; 
      curr = curr.next;
    } 
    msg = msg.slice(0,-2);
    msg += ']';
    // msg[msg.length - 1] = ']';
    console.log(msg);
  }

  getHead = () => this.head; 
  reverse() {
    if(!this.head) return;
    let curr = this.head;
    let prev = null;
    while(curr) {
      const temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
      // console.log(prev.next ? prev.next.data : null);
    }
    this.head = prev;
  }
  reverse_recursive(head,prev) {
    if(!head) return prev;
    let temp = head.next;
    head.next = prev;
    prev = head;
    return this.reverse_recursive(temp,prev);
  }
  setHead = (head) => this.head = head;

  /**
   * @purpose - return reverse the list from Mth to Nth position
   */
  reverseM2N(m,n) {
    if(!this.head) return this.head;
    let prev = null;
    let curr = this.head;
    let beforeMthNode = null;
    let mthNode = null;
    let currIndex = 0;
    while(currIndex <= n-1) {
      if(currIndex < m-1) {
        prev = curr;
        curr = curr.next;
        beforeMthNode = prev;
        mthNode = curr;
      } else {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
      }
      currIndex++;
    } 
    beforeMthNode.next = prev;
    mthNode.next = curr;
    return this.head;
  }
}

const ll = new LinkedList();
ll.append(1);
// ll.append(2);
// ll.append(3);
// ll.bulkAppend([4,5,6,7,8,9,10,11]);
// ll.reverse();
// ll.print();
// ll.setHead(ll.reverse_recursive(ll.getHead(),null));
console.log('Original Singly Linked List');
ll.print();
ll.reverseM2N(1,1);
console.log();
console.log('Now Reverse the elements from 3rd to 8rth position in Original List so Now the list is -');
ll.print();
// console.log(ll.length);