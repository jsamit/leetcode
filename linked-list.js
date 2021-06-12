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
    while(curr) {
      console.log(curr.data + ' ');
      curr = curr.next;
    } 
  }

  reverse() {
    if(!this.head) return;
    let curr = this.head;
    let prev = null;
    let next = this.head.next;
    while(next) {
      curr.next = prev;
      prev = curr;
      curr = next;
      next = next.next;
      // console.log(prev.next ? prev.next.data : null);
    }
    curr.next = prev;
    this.head = curr;
    return this;
  }
}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.bulkAppend([4,5,6]);
// ll.reverse().print();
console.log(ll.length);