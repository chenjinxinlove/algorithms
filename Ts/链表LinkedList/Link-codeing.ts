import LinkedList from './LinkedList';

const linklist = new LinkedList();

linklist.add(1);
linklist.add(2);
linklist.add(3);
linklist.add(4);
linklist.add(5);

// 单链表翻转
linklist.reverse();


console.log(JSON.stringify(linklist));