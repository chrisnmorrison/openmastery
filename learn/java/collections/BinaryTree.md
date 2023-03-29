---
sidebar_position: 11
---

# BinaryTree

A binary tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child. Binary trees are commonly used in computer science for organizing and storing data. In Java, binary trees are implemented using the TreeNode class, which represents a node in the binary tree.
TreeNode Class

The TreeNode class is a generic class that represents a node in a binary tree. It has the following properties:

- val: the value of the node
- left: the left child node
- right: the right child node

Here is an example implementation of the TreeNode class:

```java
class TreeNode<T> {
    T val;
    TreeNode<T> left;
    TreeNode<T> right;

    public TreeNode(T val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
```

## Binary Tree Traversal

Binary tree traversal is the process of visiting all nodes in a binary tree in a specific order. There are three common ways to perform binary tree traversal:

### Inorder Traversal

Inorder traversal is a type of binary tree traversal in which we visit the left subtree, then the root node, and then the right subtree. Here is an example implementation of inorder traversal using recursion:

```java
public void inorderTraversal(TreeNode<T> root) {
    if (root == null) {
        return;
    }
    inorderTraversal(root.left);
    System.out.print(root.val + " ");
    inorderTraversal(root.right);
}
```

### Preorder Traversal

Preorder traversal is a type of binary tree traversal in which we visit the root node, then the left subtree, and then the right subtree. Here is an example implementation of preorder traversal using recursion:

```java
public void preorderTraversal(TreeNode<T> root) {
    if (root == null) {
        return;
    }
    System.out.print(root.val + " ");
    preorderTraversal(root.left);
    preorderTraversal(root.right);
}
```

### Postorder Traversal

Postorder traversal is a type of binary tree traversal in which we visit the left subtree, then the right subtree, and then the root node. Here is an example implementation of postorder traversal using recursion:

```java
public void postorderTraversal(TreeNode<T> root) {
    if (root == null) {
        return;
    }
    postorderTraversal(root.left);
    postorderTraversal(root.right);
    System.out.print(root.val + " ");
}
```

Binary trees are a powerful data structure in computer science that are commonly used for organizing and storing data. In Java, binary trees are implemented using the TreeNode class, which represents a node in the binary tree. Binary tree traversal is the process of visiting all nodes in a binary tree in a specific order, and there are three common ways to perform binary tree traversal: inorder, preorder, and postorder traversal.