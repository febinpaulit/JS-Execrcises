class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null)
            this.root = newNode;
        else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value) {
        if(!this.root){
            return false;
        }

        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            }
            else  if(value > currentNode.value){
                currentNode = currentNode.right;
            }
            else if(currentNode.value === value){
                return currentNode;
            }
        }
        return false;
    }

  remove1(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
    remove(value){
        if(!this.root){
            return false;
        }

       const removeNode = (node, value) => {
            if (!node) return null;

            if (value < node.value) {
                node.left = removeNode(node.left, value);
                return node;
            } else if (value > node.value) {
                node.right = removeNode(node.right, value);
                return node;
            } else {
                // Case 1: No child
                if (!node.left && !node.right) {
                    return null;
                }
                // Case 2: One child
                if (!node.left) {
                    return node.right;
                }
                if (!node.right) {
                    return node.left;
                }
                // Case 3: Two children
                let successor = this.findMin(node.right);
                node.value = successor.value;
                node.right = removeNode(node.right, successor.value);
                return node;
            }
        };

        this.root = removeNode(this.root, value);
        return true;
    }

    findMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));
//console.log(tree.lookup(171));
printTree(tree.root);
tree.remove(20);
printTree(tree.root);

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

function printTree(node, prefix = "", isLeft = true) {
  if (node === null) return;
  if (node.right !== null) {
    printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
  }
  console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);
  if (node.left !== null) {
    printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
  }
}