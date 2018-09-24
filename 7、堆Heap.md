# 堆 (数据结构)

在计算机科学中, 一个 ** 堆(heap)** 是一种特殊的基于树的数据结构，它满足下面描述的堆属性。

在一个 *最小堆(min heap)* 中, 如果 `P` 是 `C` 的一个父级节点, 那么 `P`  的key(或value)应小于或等于 `C` 的对应值.

![最小堆](https://zky.koocdn.com/club/picture/a3178f6523094b9ba064d0e61e3f57e0.png)

在一个  *最大堆(max heap)* 中,  `P` 的key(或value)大于 `C` 的对应值。

![堆](https://zky.koocdn.com/club/picture/d64f977c3d13414fa74e913a045ad5d0.jpg)


在堆“顶部”的没有父级节点的节点,被称之为根节点。


## 二叉堆

- 二叉堆是一颗完全二叉树（不一定是满二叉树但是是从左到右）
- 完全二叉树：把元素顺序排列成树的形状
- 堆中某个节点的值总是不大于其父节点的值----最大堆
- 相反的定义就是最小堆

![image](https://zky.koocdn.com/club/picture/ea028dc701564e588ee0e62f36185bd1.jpg)
![image](https://zky.koocdn.com/club/picture/22014d99c5c94536af28989ae2cb75c0.jpg)

## Sift up (上浮)

![image](https://zky.koocdn.com/club/picture/62696bc22cb344c5858f42a54b26835f.jpg)

## 从堆中取出最大的元素和Sift Down

1、取出最大的元素

![取出最大元素](https://zky.koocdn.com/club/picture/76d4899d34d14e5db6b316dae3f9f60c.jpg)

2、把最小的元素放到最大的元素
![把最小的元素放到最大的元素](https://zky.koocdn.com/club/picture/ad5d68ac11cd4a728165ddebd3dc5b92.jpg)
3、sift down 下沉

![sift down](https://zky.koocdn.com/club/picture/64b850ed8df94be7a37711c718a53815.jpg)

## replace

取出最大元素后，放入一个新元素

实现：可以先extractMax，在add，两次O(logn)的操作

实现：可以直接将堆顶元素替换，然后在sift down

## heapify

将任意的数组转化成堆

从最后的一个节点的父节点进行遍历进行siftdown

将n个元素逐个插入到一个空堆中，算法复杂度是O(nlogn)

heapifyde的过程，复杂度为O(n)