public class Main {
    public static void main(String[] args) {
        BST<Integer> bst = new BST<>();
        int[] nums = {5,3,6,8,4,2};
        for (int num: nums)
            bst.add(num);
            bst.postorderTraversal();
//        bst.preOrder();
        System.out.println();
        System.out.println(bst);

//        bst.inOrder();
//        bst.inorderTraversal();
        // 为二分搜索树释放内存
        bst.postOrder();

//        bst.preOrderNR();
    }
}
