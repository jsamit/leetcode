class Node {
  left;
  right;
  data;
}

class BT {
  root;

  insert(data,key=null,leftOrRight=true) {
    if(!this.root) {
      this.root = new Node();
      this.root.data = data;
      return true;
    }
    const temp = new Node();
    temp.data = data;
    const target = this.find(this.root,key);
    if(target) {
      if(leftOrRight) target.left = temp;
      else target.right = temp;
    }
    // console.log(this.root)
  }
  find(node,key) {
    if(!node) return false;
    if(node.data === key) return node;
    return this.find(node.left,key) || this.find(node.right,key); 
  }
  inorder(root) {
    if(!root) return;
    this.inorder(root.left);
    console.log(root.data);
    this.inorder(root.right);
  }
  height(root,height = 0) {
    if(!root) {
      return height;
    }
    height++;
    return Math.max(this.height(root.left,height),this.height(root.right,height));
  }
  getRoot = () => this.root;
  levelOrder(node,arr) {
    if(!node) return arr;
    const queue = [];
    queue.push({node: node,level: 0});
    while(queue.length) {
      const target = queue.shift();
      // arr.push({data: target.node.data,level: target.level});
      if(!arr[target.level]) arr[target.level] = [];
      arr[target.level] = [...arr[target.level],...[target.node.data]];
      if(target.node.left) queue.push({node: target.node.left,level: target.level+1});
      if(target.node.right) queue.push({node: target.node.right,level: target.level+1});  
    }
    return arr;
  }
  /**
   * @problemLink - https://leetcode.com/problems/binary-tree-level-order-traversal/
   */
  levelOrderV2(node,arr) {
    if(!node) return arr;
    const queue = [];
    queue.push(node);
    let count = queue.length;
    while(queue.length) {
      let buffer = [];
      while(count--) {
        const target = queue.shift();
        buffer.push(target.data);
        if(target.left) queue.push(target.left);
        if(target.right) queue.push(target.right); 
      }
      count = queue.length;
      arr.push(buffer);
    }
    return arr;
  }
}

const bt = new BT();
bt.insert(5);
bt.insert(10,5);
bt.insert(15,5,false);
// // bt.insert(25,10);
// bt.insert(35,25,false);
// bt.insert(40,25);
// bt.insert(45,35,false);
// bt.insert(50,45,false);
// bt.insert(55,35);
// bt.insert(60,55);
// bt.insert(60,6);
// // bt.inorder(bt.getRoot());
// console.log(bt.height(bt.getRoot()));
console.log(bt.levelOrderV2(bt.getRoot(),[]));