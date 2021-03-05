class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    add(data, left, right) {
      if(this.root === null) {
        if(data !== "-1") this.root = new Node(data);
        if(left !== "-1") this.root.left = new Node(left);
        if(right !== "-1") this.root.right = new Node(right);
      }
      else this.search(this.root, data, left, right);
    }
  
    search(root, data, left, right) {
      if(root === null) return;
      else if(root.data === data) {
        if(left !== "-1") root.left = new Node(left);
        if(right !== "-1") root.right = new Node(right);
      }
      else {
        this.search(root.left, data, left, right);
        this.search(root.right, data, left, right);
      }
    }
  
    preorder(root) {
      process.stdout.write(root.data);
      if(root.left !== null) this.preorder(root.left);
      if(root.right !== null) this.preorder(root.right);
    }
  
    inorder(root) {
      if(root.left !== null) this.inorder(root.left);
      process.stdout.write(root.data);
      if(root.right !== null) this.inorder(root.right);
  
    }
  
    postorder(root) {
      if(root.left !== null) this.postorder(root.left);
      if(root.right !== null) this.postorder(root.right);
      process.stdout.write(root.data);
    }
  }
  
  // const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
  
  const input = [
  '7',
  'A B C',
  'B D .',
  'C E F',
  'E . .',
  'F . G',
  'D . .',
  'G . .',
  ];
  
  const N = Number(input[0]);
  const arr = new Array(N);
  const tree = new Tree(N);
  
  for(let i = 0; i < N; i++) {
    const [data, left, right] = input[i + 1].split(" ");
    tree.add(data, left === "." ? '-1' : left, right === "." ? '-1' : right);
  }
  tree.preorder(tree.root);
  console.log();
  tree.inorder(tree.root);
  console.log();
  tree.postorder(tree.root);