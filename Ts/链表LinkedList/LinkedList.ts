import {EqualsFunction, defaultEquals, LoopFunction} from '../utils';
import { arrays } from '../../typescript-collections/src/lib/index';
import { LinkedListNode } from './LinkedList';

export interface LinkedListNode<T> {
    e: T;
    next: LinkedListNode<T> | null;
}

export class LinkedList<T> {
			private createNode(item: T): LinkedListNode<T> {
				return { e: item, next: null }
			}
			public head: LinkedListNode<T> | null
			public tail: LinkedListNode<T> | null
			public size: number
			constructor() {
				this.head = null
				this.tail = null
				this.size = 0
			}
			/**
			 * 获取链表中的元素
			 * @returns {number}
			 * @memberof LinkedList
			 */
			public getSize(): number {
				return this.size
			}
			/**
			 * 返回链表是否是空
			 * @returns {boolean}
			 * @memberof LinkedList
			 */
			public isEmpty(): boolean {
				return this.size === 0
			}
			/**
			 * 在链表头添加元素
			 * @param {T} item
			 * @memberof LinkedList
			 */
			public addFirst(item: T): void {
				const Node: LinkedListNode<T> = this.createNode(item)
				Node.next = this.head
				this.head = Node
			}
			/**
			 * 想链表的末尾添加元素
			 *
			 * @param {T} item
			 * @memberof LinkedList
			 */
			public addLast(item: T): void {
				this.add(item, this.size)
			}
			/**
			 * 向链表中添加节点
			 *
			 * @param {T} item
			 * @param {number} [index]
			 * @returns {boolean}
			 * @memberof LinkedList
			 */
			public add(item: T, index?: number): boolean {
				if (index === undefined) {
					index = this.size
				}
				if (index < 0 || index > this.size || index === undefined) {
					return false
				}
				const newNode = this.createNode(item)
				if (this.size === 0 || this.tail === null) {
					// 第一次向链表中插入
					this.head = newNode
					this.tail = newNode
				} else if (index === this.size) {
					// 插入到链表的尾部
					this.tail.next = newNode
					this.tail = newNode
				} else if (index === 0) {
					// 插入到头部
					newNode.next = this.head
					this.head = newNode
				} else {
					const prev = this.nodeAtIndex(index - 1)
					if (prev === null) {
						return false
					}
					newNode.next = prev.next
					prev.next = newNode
				}
				this.size++
				return true
			}
			/**
			 * 获取第一个元素
			 *
			 * @returns {(T | undefined)}
			 * @memberof LinkedList
			 */
			public getFirst(): T | undefined {
				if (this.head !== null) {
					return this.head.e
				}
				return undefined
			}
			/**
			 * 返回最后一个元素
			 *
			 * @returns {(T | undefined)}
			 * @memberof LinkedList
			 */
			public getLast(): T | undefined {
				if (this.tail !== null) {
					return this.tail.e
				}
				return undefined
			}
			/**
			 * 查找元素在链表的什么位置，没有返回-1
			 *
			 * @param {T} item
			 * @param {EqualsFunction<T>} [equalsFunction]
			 * @returns {number}
			 * @memberof LinkedList
			 */
			public indexOf(item: T, equalsFunction?: EqualsFunction<T>): number {
				const equalsF = equalsFunction || defaultEquals
				if (item === undefined) {
					return -1
				}
				let cur = this.head
				let index = 0
				while (cur !== null) {
					if (equalsF(cur.e, item)) {
						return index
					}
					index++
					cur = cur.next
				}
				return -1
			}
			/**
			 * 链表是否包含元素
			 *
			 * @param {T} item
			 * @param {EqualsFunction<T>} [equalsFunction]
			 * @returns {boolean}
			 * @memberof LinkedList
			 */
			public contains(item: T, equalsFunction?: EqualsFunction<T>): boolean {
				return this.indexOf(item, equalsFunction) >= 0
			}
			/**
			 * 获取链表中index位置的元素
			 *
			 * @param {number} index
			 * @returns {(T | undefined)}
			 * @memberof LinkedList
			 */
			public elementAtIndex(index: number): T | undefined {
				const node = this.nodeAtIndex(index)
				if (node === null) {
					return undefined
				}
				return node.e
			}
			/**
			 * 删除链表的元素
			 *
			 * @param {T} item
			 * @param {EqualsFunction<T>} [equalsFunction]
			 * @returns {boolean}
			 * @memberof LinkedList
			 */
			public remove(item: T, equalsFunction?: EqualsFunction<T>): boolean {
				const equalsF = equalsFunction || defaultEquals
				if (this.size < 1 || item !== undefined) {
					return false
				}
				let prev: LinkedListNode<T> | null = null
				let cur: LinkedListNode<T> | null = this.head

				while (cur !== null) {
					if (equalsF(cur.e, item)) {
						if (prev === null) {
							this.head = cur.next
							if ((cur = this.tail)) {
								this.tail = null
							}
						} else if (cur === this.tail) {
							this.tail = prev
							prev.next = cur.next
							cur.next = null
						} else {
							prev.next = cur.next
							cur.next = null
						}
						this.size--
						return true
					}
					prev = cur
					cur = cur.next
				}
			}
			/**
			 * 清空链表
			 *
			 * @memberof LinkedList
			 */
			public clear(): void {
				this.head = null
				this.tail = null
				this.size = 0
			}
			/**
			 * 把链表转成数组
			 *
			 * @returns {T[]}
			 * @memberof LinkedList
			 */
			public toArray(): T[] {
				const array: T[] = []
				let cur: LinkedListNode<T> | null = this.head
				while (cur !== null) {
					array.push(cur.e)
					cur = cur.next
				}
				return array
			}
			/**
			 * 删除index位置的元素
			 *
			 * @param {number} index
			 * @returns {(T | undefined)}
			 * @memberof LinkedList
			 */
			public removeElementAtIndex(index: number): T | undefined {
				if (index < 0 || index >= this.size || this.head === null || this.tail === null) {
					return undefined
				}
				let e: T | undefined
				if (this.size === 1) {
					e = this.head.e
					this.head = null
					this.tail = null
				} else {
					const prev = this.nodeAtIndex(index - 1)
					if (prev === null) {
						e = this.head.e
						this.head = this.head.next
					} else if (prev.next === this.tail) {
						e = this.tail.e
						this.tail = prev
					}
					if (prev !== null && prev.next !== null) {
						e = prev.next.e
						prev.next = prev.next.next
					}
				}
				this.size--
				return e
			}

			/**
			 * forEach
			 *
			 * @param {LoopFunction<T>} callback
			 * @memberof LinkedList
			 */
			public forEach(callback: LoopFunction<T>): void {
				let cur = this.head
				while (cur !== null) {
					if (callback(cur.e) === false) {
						break
					}
					cur = cur.next
				}
			}
			/**
			 * 翻转链表
			 *
			 * @memberof LinkedList
			 */
			public reverse(): void {
				let prev: LinkedListNode<T> | null = null
				let cur: LinkedListNode<T> | null = this.head
				let temp: LinkedListNode<T> | null = null
				while (cur !== null) {
					temp = cur.next
					cur.next = prev
					prev = cur
					cur = temp
					console.log(JSON.stringify(this));
				}
				temp = this.head
				this.head = this.tail
				this.tail = temp
			}
			/**
			 * toString
			 *
			 * @returns {string}
			 * @memberof LinkedList
			 */
			public toString(): string {
				return arrays.toString(this.toArray())
			}
			/**
			 * 获取链表index位置的节点
			 *
			 * @private
			 * @param {number} index
			 * @returns {(LinkedListNode<T> | null)}
			 * @memberof LinkedList
			 */
			private nodeAtIndex(index: number): LinkedListNode<T> | null {
				if (index < 0 || index >= this.size) {
					return null
				}
				if (index === this.size - 1) {
					return this.tail
				}
				let node = this.head
				for (let i = 0; i < index && node !== null; i++) {
					node = node.next
				}
				return node
			}
		}

export default LinkedList;