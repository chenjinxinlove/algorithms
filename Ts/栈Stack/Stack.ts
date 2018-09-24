import LinkedList from '../链表LinkedList/LinkedList'

interface StackType<T> {
	getSize: () => number
	isEmpty: () => boolean
	push: (e: T) => boolean
	pop: (e: T) => T
	peek: (e: T) => void
}
export default class Stack<T> implements StackType<T> {
	private list: LinkedList<T>
	constructor() {
		this.list = new LinkedList<T>()
	}
	public getSize(): number {
		return this.list.getSize()
	}
	public isEmpty(): boolean {
		return this.list.isEmpty()
	}
	public push(e: T): boolean {
		return this.list.add(e, 0)
	}
	public pop(e: T): T | undefined {
		return this.list.removeElementAtIndex(0)
	}
	public peek(e: T): void {
		return this.list.addFirst(e)
	}
}
