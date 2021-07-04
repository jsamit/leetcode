let execution = 0;
class Node {
  left;
  right;
  data;
}

class CBT {
  root;
  farthest;

  insert(data) {
    if(!this.root) {
      this.root = new Node();
      this.root.data = data;
      return;
    }
    const temp = new Node();
    temp.data = data;
    let node = this.root;
    let prev = null;
    while(node) {
      execution++;
      prev = node;
      if(node.data > data)
        node = node.left;
      else 
        node = node.right;
    }
    if(prev.data > data) prev.left = temp;
    else prev.right = temp;
  }
  bulkAdd(list = []) {
    list.forEach(data => this.insert(data));
  }
  inorder(node) {
    if(!node) return;
    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
  }
  isValidBST(node,left,right) {
    if(!node) return true;
    if(!(node.data > left && node.data < right)) return false;
    return this.isValidBST(node.left,left,node.data) && this.isValidBST(node.right,node.data,right);
    execution++;
  }
}
const cbt = new CBT();
cbt.bulkAdd([2,1,3]);
cbt.inorder(cbt.root);
// console.log(cbt.nodeCount(cbt.root));
console.log(cbt.isValidBST(cbt.root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER));
console.log(execution);
