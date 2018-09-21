import LinkedList from '../链表LinkedList/LinkedList';

interface QueueType<T> {
    getSize:() => number;
    isEmpty: () => boolean;
    enqueue:(e:T) => void;
    dequeue:() => T | undefined;
    getFront:() => T | undefined;
}

export default class Queue<T> implements QueueType<T> {
    private list: LinkedList<T>;
    constructor() {
        this.list = new LinkedList<T>();
    }
    public getSize():number {
        return this.list.getSize();
    }
    public isEmpty():boolean {
        return this.list.isEmpty();
    }
    public enqueue(e:T): boolean {
        return this.list.add(e);
    }
    public dequeue(): T | undefined {
        if (this.list.getSize() !== 0) {
            const el = this.list.getFirst();
            this.list.removeElementAtIndex(0);
            return el;
        }
        return undefined;
    }
    public getFront(): T | undefined {
        if (this.list.getSize() !== 0) {
            return this.list.getFirst();
        }
        return undefined;
    }
}