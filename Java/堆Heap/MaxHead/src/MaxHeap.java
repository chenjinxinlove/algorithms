public class MaxHeap<E extends Comparable<E>> {
    private Array<E> data;

    public MaxHeap(int capacity) {
        data = new Array<>(capacity);
    }

    public MaxHeap(){
        data = new Array<>();
    }
    public MaxHeap(E[] arr) {
        data = new Array<>(arr);

    }

    public int size() {
        return data.getSize();
    }

    public boolean isEmpty(){
        return data.isEmpty();
    }

    /**
     * 返回完全二叉树的数组表示中，一个索引所表示的元素的父亲节点的索引
     * @param index
     * @return
     */

    private int parent(int index) {
//        if (index == 0)
//            throw new IllegalAccessException("index-0 doesn't have parent.");
        return (index - 1) / 2;
    }

    /**
     * 返回完成二叉树的数组表示中，一个索引所表示的元素的左孩子节点的索引
     * @param index
     * @return
     */
    private int leftChild(int index) {
        return index * 2 + 1;
    }

    /**
     * 返回完成二叉树的数组表示中，一个索引所表示的元素的右孩子节点的索引
     * @param index
     * @return
     */
    private int rightChild(int index) {
        return index * 2 + 2;
    }

    /**
     * 向堆中添加元素
     * @param e
     */
    public void add(E e) {
        data.addLast(e);
        siftUp(data.getSize() - 1);
    }

    /**
     * 上浮
     * @param k
     */
    private void siftUp(int k){
        while (k > 0 && data.get(parent(k)).compareTo(data.get(k)) < 0) {
            data.swap(k, parent(k));
            k = parent(k);
        }
    }

    /**
     * 找最大元素
     * @return
     */
    public E findMax(){
        if (data.getSize() == 0)
            throw new IllegalArgumentException("Can not findMax. when heap is empty.");
        return data.get(0);
    }

    /**
     * 取出堆中的最大元素
     * @return
     */
    public E extractMax(){
        E ret = findMax();

        data.swap(0, data.getSize() - 1);
        data.removeLast();

        siftDown(0);

        return ret;
    }

    private void siftDown(int k) {
        while (leftChild(k) < data.getSize()) {
            int j = leftChild(k);
            if (j + 1 < data.getSize() && data.get(j+1).compareTo(data.get(j)) > 0)
                j = rightChild(k);
            // data[j]是leftChild和rightChild中的最大值
            if (data.get(k).compareTo(data.get(j)) >= 0)
                break;

            data.swap(k, j);
            k = j;
        }
    }

    /**
     * 替换
     * @param e
     * @return
     */
    public E replace(E e) {
        E ret = findMax();
        data.set(0, e);
        siftDown(0);
        return ret;
    }
}
