public class LinkedList<E> {
    private class Node {
        public E e;
        public Node next;

        public Node(E e, Node next){
            this.e = e;
            this.next = next;
        }

        public Node(E e) {
            this(e, null);
        }

        public Node() {
            this(null, null);
        }

        @Override
        public String toString(){
            return e.toString();
        }
    }

    private Node dummyhead;
    int size;

    public LinkedList() {
        dummyhead = new Node(null, null);
        size = 0;
    }

    /**
     * 获取链表中的元素的个数
     * @return
     */
    public int getSize(){
        return size;
    }

    /**
     * 返回链表是否为空
     * @return
     */
    public boolean isEmpty() {return size == 0;}

    /**
     * 在链表头添加元素
     * @param e
     */
    public void addFirst(E e) {
//        Node node = new Node(e);
//        node.next = head;
//        head = node;
        add(0, e);
    }

    /**
     * 在index位置上添加
     * @param index
     * @param e
     */
    public void add(int index, E e) {
        if (index < 0 || index > size)
            throw new IllegalArgumentException("Add faild. Illegal index.");

        Node prev = dummyhead;
        for (int i = 0; i < index; i++) {
            prev = prev.next;
        }
//            Node node = new Node(e);
//            node.next = prev.next;
//            prev.next = node;

        prev.next = new Node(e, prev.next);
        size ++;
    }

    /**
     * 在链表末尾添加一个元素
     * @param e
     */
    public void addLast(E e) {
        add(size, e);
    }

    /**
     * 获取
     * @param index
     * @return
     */
    public E get(int index) {
        if (index < 0 || index > size)
            throw new IllegalArgumentException("Get faild. Illegal index.");
        Node cur = dummyhead.next;
        for (int i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur.e;
    }

    /**
     * 获取链表的第一个元素
     * @return
     */
    public E getFirst() {
        return get(0);
    }

    /**
     * 获取链表的最后一个元素
     * @return
     */
    public E getLast(){
        return get(size - 1);
    }

    public void set(int index, E e){
        if (index < 0 || index > size)
            throw new IllegalArgumentException("Set faild. Illegal index.");

        Node cur = dummyhead.next;
        for (int i = 0; i < index ; i++) {
            cur = cur.next;
        }
        cur.e = e;
    }

    /**
     * 查找链表中是否有那个元素e
     * @param e
     * @return
     */
    public boolean contains(E e) {
        Node cur = dummyhead.next;
        while (cur != null){
            if (cur.e.equals(e)){
                return true;
            }
            cur = cur.next;
        }
        return false;
    }

    /**
     * 删除元素
     * @param index
     * @return
     */
    public E remove(int index) {
        if (index < 0 || index > size)
            throw new IllegalArgumentException("Set faild. Illegal index.");
        Node prev = dummyhead;
        for (int i = 0; i < index; i++) {
            prev = prev.next;
        }
        Node retNode = prev.next;
        prev.next = retNode.next;
        retNode.next = null;
        size --;
        return retNode.e;
    }

    /**
     * 删除链表的第一个元素
     * @return
     */
    public E removeFirst(){
        return remove(0);
    }

    /**
     * 从链表中删除最后一个元素
     * @return
     */
    public E removeLast(){
        return remove(size -1 );
    }
    @Override
    public String toString(){
        StringBuilder res = new StringBuilder();

        Node cur = dummyhead.next;
        while (cur != null) {
            res.append(cur + "->");
            cur = cur.next;
        }
        res.append("NULL");

        return res.toString();
    }
}
