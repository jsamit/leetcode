let execution = 0;
class Node {
  left;
  right;
  data;
}

class CBT {
  root;
  farthest;

  add(data) {
    if(!this.root) {
      this.root = new Node();
      this.root.data = data;
      return;
    }
    const temp = new Node();
    temp.data = data;
    const loc = this.where(this.root,null);
    if(!loc.left) loc.left = temp;
    else loc.right = temp;
  }
  bulkAdd(list = []) {
    list.forEach(data => this.add(data));
  }

  where(node) {
    const queue = [];
    queue.push(node);
    while(queue.length) {
      const temp = queue.shift();
      if(!temp.left || !temp.right) return temp;
      queue.push(temp.left);
      queue.push(temp.right);
    }
  }
  whereRec(node,parent) {
    if(parent && !(node.left && node.right)) return null;
    if(!node.left || !node.right) return node;
    return this.whereRec(node.left,node) || this.WhereRec(node.right,node);
  }
  inorder(node) {
    if(!node) return;
    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
  }
  height(node) {
    let count = 0;
    while(node.left) {
      node = node.left;
      count++;
    } 
    return count;
  }
  nodeCount(node) {
debugger;
    const height = Math.pow(2,this.height(node)) - 1;
    let left = 0;
    let right = height;
    while(left < right) {
      execution++;
      const mid = Math.ceil((left+right)/2);
      if(this.nodeExistAt(node,mid,height)) {
        left = mid;
      } else {
        right = mid - 1;
      }
      // console.log({left,right});
    }
    return height + left + 1;
  }
  nodeExistAt(node,indexAt) {
    let count = 0;
    let left = 0;
    let height = this.height(node);
    let right = Math.pow(2,height) - 1;
    while(count < height) {
      const mid = Math.ceil((left+right)/2);
      if(mid > indexAt) {
        right = mid - 1;
        node = node.left;
      }
      else {
        left = mid;
        node = node.right;
      }
      count++;
      execution++;
    }
    return node || null !== null;
  }
}
const cbt = new CBT();
cbt.bulkAdd([...Array(4096)].map((_,index) => ++index));
// cbt.inorder(cbt.root);
console.log(cbt.nodeCount(cbt.root));
console.log(execution);
