import { LinkedListNode, LinkedList } from './LinkedList';
import { expect } from 'chai';

describe('链表Lined List', () => {
    let list: LinkedListNode<any>;
    const elems: number = 100;
    beforeEach(() => {
        list = new LinkedList();
    })
    it('添加元素', () => {
        expect(list.size()).toBe(0);
        for (var i = 0; i < elems; i++) {
            list.add(i);
            expect(list.size()).equals(i + 1);
        }
    });
});