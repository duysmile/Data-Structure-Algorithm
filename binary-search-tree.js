class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (!root.left) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else if (node.value > root.value) {
            if (!root.right) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    remove(value) {
        if (!this.root) {
            console.log('Tree is empty');
        } else {
            this.removeNode(this.root, value);
        }
    }

    removeNode(root, value) {
        if (root.value > value) {
            root.left = this.removeNode(root.left, value);
            return root;
        } else if (root.value < value) {
            root.right = this.removeNode(root.right, value);
            return root;
        } else {
            if (!root.left && !root.right) {
                root = null;
                return root;
            }

            if (root.left && !root.right) {
                root = root.left;
                return root;
            } else if (root.right && !root.left) {
                root = root.right;
                return root;
            }

            const minNode = this.findMinNode(root.right);
            root.value = minNode.value;

            root.right = this.removeNode(root.right, minNode.value);
            return root;
        }
    }

    findMinNode(root) {
        if (!root.left) {
            return root;
        } else {
            return this.findMinNode(root.left);
        }
    }

    search(value) {
        if (!this.root) {
            return false;
        }

        return this.searchNode(this.root, value);
    }

    searchNode(root, value) {
        if (!root) {
            return false;
        }

        if (root.value > value) {
            return this.searchNode(root.left, value);
        } else if (root.value < value) {
            return this.searchNode(root.right, value);
        } else {
            return true;
        }
    }
}

const bst = new BST();
bst.insert(10);
bst.insert(1);
bst.insert(5);
bst.insert(4);
bst.insert(6);
bst.insert(11);

console.log(JSON.stringify(bst, null, 2));
