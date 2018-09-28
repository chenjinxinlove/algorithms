# 树

* [二叉搜索树](binary-search-tree)
* [AVL树](avl-tree)
* [红黑树](red-black-tree)
* [线段树](segment-tree) - with min/max/sum range queries examples
* [芬威克树/Fenwick Tree](fenwick-tree) (Binary Indexed Tree)

在计算机科学中, **树(tree)** 是一种广泛使用的抽象数据类型(ADT)— 或实现此ADT的数据结构 — 模拟分层树结构, 具有根节点和有父节点的子树,表示为一组链接节点。

树可以被(本地地)递归定义为一个(始于一个根节点的)节点集, 每个节点都是一个包含了值的数据结构, 除了值,还有该节点的节点引用列表(子节点)一起。
树的节点之间没有引用重复的约束。

一棵简单的无序树; 在下图中:

标记为7的节点具有两个子节点, 标记为2和6; 
一个父节点,标记为2,作为根节点, 在顶部,没有父节点。

![Tree](https://upload.wikimedia.org/wikipedia/commons/f/f7/Binary_tree.svg)


## 二叉树

二叉树和链表一样是动态数据结构

```
class Node {
  E e;
  Node left;
  Node right;
}
```
- 二叉树具有唯一的根节点
- 左孩子和右孩子没有子节点的节点是叶子节点
- 二叉树最多有两个孩子节点
- 二叉树具有天然递归结构
- 


## 二分搜索树 binary search tree

- 二分搜索树是二叉树
- 二分搜索树的每个节点的值
  - 大于其左子树的所有节点的值
  - 小于其右子树的所有节点的值
- 每一子节点也都是二分搜索树
- 存储的元素必须有可比较性

知识点

- 前中后序遍历和借助栈的非递归遍历（深度遍历）
- 层级遍历（广度遍历）就是一层一层的展示借助队列实现
- 广度优先遍历的意义----更快的找到问题的解，常用于算法的设计中-最短路径

删除一个节点

![image](https://zky.koocdn.com/club/picture/61ec0508751d4db79db3cfffcac8fe38.png)
![image](https://zky.koocdn.com/club/picture/ec4b9873e30c41f2bcd86b1a664d7bad.png)
![image](https://zky.koocdn.com/club/picture/392962c220a04ceaaa32eaf6fc7b64af.jpg)

## [线段树](segment-tree) - with min/max/sum range queries examples

#### 最经典的线段树问题：区间染色

- m次操作后，我们可以看见多少种颜色
- m次操作后，我们可以在【i，j]区间内看见多少种颜色？

- 染色操作（更新区间） 数组实现  O(n)
- 查询操作（查询区间） 数组实现  O(n)


#### 区间查询

- 查询一个区间[i, j]的统计查询？
- 例子----2017年注册用户中消费最高的用户？消费最少的用户？学习时间最长的用户？
- 使用线段树是O(logn)的复杂度

#### 什么是线段树

[线段树](https://zky.koocdn.com/club/picture/e36845cae84a49a6a8c40febc5127000.jpeg)

不是完全二叉树但是是一个平衡二叉树 堆也是平衡二叉树

### tire 字段树   前缀树

#### 什么是tire

是一个多叉树，只用用来处理字符串（字典）

时间复杂度只能单词的字符长度相关


