## Binary Search Tree (BST)

`BST` is a special type of Binary Tree (`max 2 children` as well) which is sorted in particular way:

- every node `to the left` of a `parent` node is always `less` than the parent
- every node `to the right` of a `parent` node is always `greater` than the parent

![BST Scheme](./assets/bst-scheme.png)

#### Big O

- `insertion` - O(log n), but not guaranteed in worst case
- `searching` - O(log n), but not guaranteed in worst case

<img src="./assets/bst-bigo-1.png" width="500" alt="BST BigO complexity-1" />
<img src="./assets/bst-bigo-2.png" width="500" alt="BST BigO complexity-2" />

#### Worst case O(n)

<img src="./assets/bst-worst.png" width="500" alt="BST Big O worst case" />
