import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class BST<E extends Comparable<E>> {
    private class Node {
        public E e;
        public Node left, right;

        public Node(E e) {
            this.e = e;
            left = null;
            right = null;
        }
    }

    private Node root;
    private int size;
    public BST(){
        root = null;
        size = 0;
    }
    public int size() {
        return  size;
    }

    public boolean isEmpty() {
        return size == 0;
    }
    public void add (E e) {
//        if (root == null) {
//            root = new Node(e);
//            size ++;
//        }
//        else
//            add(root, e);

        root = add(root, e);
    }

    /**
     * 向以node为根的二分搜索树种插入元素E， 递归算法
     * @param node
     * @param e
     */
//    private void add(Node node, E e) {
//        // 终止条件
//        if(e.equals(node.e))
//            return;
//        else if (e.compareTo(node.e) < 0 && node.left == null){
//            node.left = new Node(e);
//            size ++;
//            return;
//        }
//        else if (e.compareTo(node.e) > 0 && node.right == null){
//            node.right = new Node(e);
//            size++;
//            return;
//        }
//        // 子递归
//        if (e.compareTo(node.e) < 0)
//            add(node.left, e);
//        else
//            add(node.right, e);
//    }

    private Node add(Node node, E e) {
        if (node == null) {
            size ++;
            return new Node(e);
        }
        // 子递归
        if (e.compareTo(node.e) < 0)
            node.left = add(node.left, e);
        else
            node.right = add(node.right, e);
        return node;
    }

    /**
     * 看二分搜索树种是否包括元素e
     * @param e
     * @return
     */
    public boolean contains(E e) {
        return contains(root, e);
    }

    private boolean contains(Node node, E e) {
        if (node == null)
            return false;

        if (e.compareTo(node.e) == 0)
            return true;
        else if (e.compareTo(node.e) < 0)
            return contains(node.left, e);
        else
            return contains(node.right, e);
    }

    /**
     * 使用循环进行前序遍历
     */
    public void preOrderNR(){
        Stack<Node> stack = new Stack<>();
        stack.push(root);
        while (!stack.isEmpty()) {
            Node cur = stack.pop();
            System.out.println(cur.e);
            if (cur.right != null)
                stack.push(cur.right);
            if (cur.left != null)
                stack.push(cur.left);
        }
    }

    // 二分搜索树的前序遍历
    public void preOrder(){
        preOrder(root);
    }
    // 前序遍历以node为根的二分搜索树
    private void preOrder(Node node) {
        if(node == null)
            return;

        System.out.println(node.e);
        preOrder(node.left);
        preOrder(node.right);

//        if (node != null) {
//            System.out.println(node.e);
//            preOrder(node.left);
//            preOrder(node.right);
//        }
    }

    /**
     * 非递归中序遍历
     * @return
     */
    public void inorderTraversal() {
        Stack<Node> stack = new Stack<Node>();
        Node cur = root;

        while(cur!=null || !stack.empty()){
            while(cur!=null){
                stack.add(cur);
                cur = cur.left;
            }
            cur = stack.pop();
            System.out.println(cur.e);
            cur = cur.right;
        }
    }

    public void inOrder() {
        inOrder(root);
    }
    private void inOrder(Node node) {
        if(node == null)
            return;

        inOrder(node.left);
        System.out.println(node.e);
        inOrder(node.right);
    }
    public void postOrder() {
        postOrder(root);
    }
    private void postOrder(Node node) {
        if(node == null)
            return;

        postOrder(node.left);
        postOrder(node.right);
        System.out.println(node.e);
    }

    /**
     * 后续遍历需要存在数组中反转一下数组
     */
    public void postorderTraversal() {
        Stack<Node> stack = new Stack<Node>();
        stack.push(root);
        while (!stack.isEmpty()) {
            Node node = stack.pop();
            if (node != null) {

                stack.push(node.left);
                stack.push(node.right);
                System.out.println(node.e);
            }
        }
    }

    /**
     * 二分搜索树的层序遍历
     */
    public void levelOrder() {
        Queue<Node> q = new LinkedList<>();
        q.add(root);
        while (q.isEmpty()) {
            Node cur = q.remove();
            System.out.println(cur.e);

            if(cur.left != null)
                q.add(cur.left);
            if(cur.right != null)
                q.add(cur.right);
        }
    }

    /**
     * 寻找二分搜索树的最小元素
     * @return
     */
    public E mininum() {
        if (size == 0)
            throw new IllegalArgumentException("BST is empty!");

        return mininum(root).e;
    }
    // 返回以node为根的二分搜索树的最小值所在的节点
    private Node mininum(Node node) {
        if(node.left == null)
            return node;
        return mininum(node.left);
    }

    /**
     * 寻找二分搜索树的最大元素
     * @return
     */
    public E maximun(){
        if (size == 0)
            throw new IllegalArgumentException("BST is empty!");

        return maximun(root).e;
    }
    private Node maximun(Node node) {
        if (node.right == null)
            return node;
        return maximun(node.right);
    }

    /**
     * 移除最小的元素
     * @return
     */
    public E removeMin() {
        E ret = mininum();
        removeMin(root);
        return ret;
    }
    private Node removeMin(Node node) {
        if(node.left == null) {
            Node rightNode = node.right;
            node.right = null;
            size--;
            return rightNode;
        }
        node.left = removeMin(node.left);
        return  node;
    }

    /**
     * 移除最大的元素
     * @return
     */
    public E removeMax() {
        E ret = maximun();
        root = removeMax(root);
        return ret;
    }
    private Node removeMax(Node node) {
        if (node.right == null) {
            Node leftNode = node.left;
            node.left = null;
            size--;
            return leftNode;
        }
        node.right = removeMax(node.right);
        return node;
    }

    /**
     * 在二分搜索树种删除任意的元素
     * @return
     */

    public void remove(E e) {
        root = remove(root, e);
    }
    private Node remove(Node node, E e) {
        if (node == null)
            return null;

        if (e.compareTo(node.e) < 0){
            node.left = remove(node.left, e);
            return node;
        }
        else if (e.compareTo(node.e) > 0) {
            node.right = remove(node.right, e);
            return node;
        }
        else { // e == node.e

            // 待删除节点左子树为空的情况
            if (node.left == null) {
                Node rightNode = node.right;
                node.right = null;
                size --;
                return rightNode;
            }
            // 待删除节点右子树为空的情况
            if (node.right == null) {
                Node leftNode = node.left;
                node.left = null;
                size--;
                return leftNode;
            }
            // 待删除节点右左子树都不为空的情况
            // 找到比待删除节点大的最小节点，即待删除节点右子树的最小节点
            // 用这个节点顶替待删除节点的位置
            Node successor = mininum(node.right);
            successor.right = removeMin(node.right);
            successor.left = node.left;

            node.left = node.right = null;

            return successor;

        }
    }
    @Override
    public String toString(){
        StringBuilder res = new StringBuilder();
        generateBSTString(root, 0, res);
        return  res.toString();
    }
    private void generateBSTString(Node node, int depth, StringBuilder res) {
        if (node == null) {
            res.append(generateDepthString(depth) + "null\n");
            return;
        }
        res.append(generateDepthString(depth) + node.e + "\n");
        generateBSTString(node.left, depth+1, res);
        generateBSTString(node.right, depth+1, res);
    }
    private String generateDepthString(int depth) {
        StringBuilder res = new StringBuilder();
        for (int i = 0; i < depth; i++) {
            res.append("--");
        }
        return res.toString();
    }
}
