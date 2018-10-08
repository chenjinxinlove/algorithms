"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var index_1 = require("../../typescript-collections/src/lib/index");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.createNode = function (item) {
        return { e: item, next: null };
    };
    /**
     * 获取链表中的元素
     * @returns {number}
     * @memberof LinkedList
     */
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    /**
     * 返回链表是否是空
     * @returns {boolean}
     * @memberof LinkedList
     */
    LinkedList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    /**
     * 在链表头添加元素
     * @param {T} item
     * @memberof LinkedList
     */
    LinkedList.prototype.addFirst = function (item) {
        var Node = this.createNode(item);
        Node.next = this.head;
        this.head = Node;
    };
    /**
     * 想链表的末尾添加元素
     *
     * @param {T} item
     * @memberof LinkedList
     */
    LinkedList.prototype.addLast = function (item) {
        this.add(item, this.size);
    };
    /**
     * 向链表中添加节点
     *
     * @param {T} item
     * @param {number} [index]
     * @returns {boolean}
     * @memberof LinkedList
     */
    LinkedList.prototype.add = function (item, index) {
        if (index === undefined) {
            index = this.size;
        }
        if (index < 0 || index > this.size || index === undefined) {
            return false;
        }
        var newNode = this.createNode(item);
        if (this.size === 0 || this.tail === null) {
            // 第一次向链表中插入
            this.head = newNode;
            this.tail = newNode;
        }
        else if (index === this.size) {
            // 插入到链表的尾部
            this.tail.next = newNode;
            this.tail = newNode;
        }
        else if (index === 0) {
            // 插入到头部
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            var prev = this.nodeAtIndex(index - 1);
            if (prev === null) {
                return false;
            }
            newNode.next = prev.next;
            prev.next = newNode;
        }
        this.size++;
        return true;
    };
    /**
     * 获取第一个元素
     *
     * @returns {(T | undefined)}
     * @memberof LinkedList
     */
    LinkedList.prototype.getFirst = function () {
        if (this.head !== null) {
            return this.head.e;
        }
        return undefined;
    };
    /**
     * 返回最后一个元素
     *
     * @returns {(T | undefined)}
     * @memberof LinkedList
     */
    LinkedList.prototype.getLast = function () {
        if (this.tail !== null) {
            return this.tail.e;
        }
        return undefined;
    };
    /**
     * 查找元素在链表的什么位置，没有返回-1
     *
     * @param {T} item
     * @param {EqualsFunction<T>} [equalsFunction]
     * @returns {number}
     * @memberof LinkedList
     */
    LinkedList.prototype.indexOf = function (item, equalsFunction) {
        var equalsF = equalsFunction || utils_1.defaultEquals;
        if (item === undefined) {
            return -1;
        }
        var cur = this.head;
        var index = 0;
        while (cur !== null) {
            if (equalsF(cur.e, item)) {
                return index;
            }
            index++;
            cur = cur.next;
        }
        return -1;
    };
    /**
     * 链表是否包含元素
     *
     * @param {T} item
     * @param {EqualsFunction<T>} [equalsFunction]
     * @returns {boolean}
     * @memberof LinkedList
     */
    LinkedList.prototype.contains = function (item, equalsFunction) {
        return this.indexOf(item, equalsFunction) >= 0;
    };
    /**
     * 获取链表中index位置的元素
     *
     * @param {number} index
     * @returns {(T | undefined)}
     * @memberof LinkedList
     */
    LinkedList.prototype.elementAtIndex = function (index) {
        var node = this.nodeAtIndex(index);
        if (node === null) {
            return undefined;
        }
        return node.e;
    };
    /**
     * 删除链表的元素
     *
     * @param {T} item
     * @param {EqualsFunction<T>} [equalsFunction]
     * @returns {boolean}
     * @memberof LinkedList
     */
    LinkedList.prototype.remove = function (item, equalsFunction) {
        var equalsF = equalsFunction || utils_1.defaultEquals;
        if (this.size < 1 || item !== undefined) {
            return false;
        }
        var prev = null;
        var cur = this.head;
        while (cur !== null) {
            if (equalsF(cur.e, item)) {
                if (prev === null) {
                    this.head = cur.next;
                    if ((cur = this.tail)) {
                        this.tail = null;
                    }
                }
                else if (cur === this.tail) {
                    this.tail = prev;
                    prev.next = cur.next;
                    cur.next = null;
                }
                else {
                    prev.next = cur.next;
                    cur.next = null;
                }
                this.size--;
                return true;
            }
            prev = cur;
            cur = cur.next;
        }
    };
    /**
     * 清空链表
     *
     * @memberof LinkedList
     */
    LinkedList.prototype.clear = function () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };
    /**
     * 把链表转成数组
     *
     * @returns {T[]}
     * @memberof LinkedList
     */
    LinkedList.prototype.toArray = function () {
        var array = [];
        var cur = this.head;
        while (cur !== null) {
            array.push(cur.e);
            cur = cur.next;
        }
        return array;
    };
    /**
     * 删除index位置的元素
     *
     * @param {number} index
     * @returns {(T | undefined)}
     * @memberof LinkedList
     */
    LinkedList.prototype.removeElementAtIndex = function (index) {
        if (index < 0 || index >= this.size || this.head === null || this.tail === null) {
            return undefined;
        }
        var e;
        if (this.size === 1) {
            e = this.head.e;
            this.head = null;
            this.tail = null;
        }
        else {
            var prev = this.nodeAtIndex(index - 1);
            if (prev === null) {
                e = this.head.e;
                this.head = this.head.next;
            }
            else if (prev.next === this.tail) {
                e = this.tail.e;
                this.tail = prev;
            }
            if (prev !== null && prev.next !== null) {
                e = prev.next.e;
                prev.next = prev.next.next;
            }
        }
        this.size--;
        return e;
    };
    /**
     * forEach
     *
     * @param {LoopFunction<T>} callback
     * @memberof LinkedList
     */
    LinkedList.prototype.forEach = function (callback) {
        var cur = this.head;
        while (cur !== null) {
            if (callback(cur.e) === false) {
                break;
            }
            cur = cur.next;
        }
    };
    /**
     * 翻转链表
     *
     * @memberof LinkedList
     */
    LinkedList.prototype.reverse = function () {
        var prev = null;
        var cur = this.head;
        var temp = null;
        while (cur !== null) {
            temp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = temp;
            console.log(JSON.stringify(this));
        }
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    };
    /**
     * toString
     *
     * @returns {string}
     * @memberof LinkedList
     */
    LinkedList.prototype.toString = function () {
        return index_1.arrays.toString(this.toArray());
    };
    /**
     * 获取链表index位置的节点
     *
     * @private
     * @param {number} index
     * @returns {(LinkedListNode<T> | null)}
     * @memberof LinkedList
     */
    LinkedList.prototype.nodeAtIndex = function (index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        if (index === this.size - 1) {
            return this.tail;
        }
        var node = this.head;
        for (var i = 0; i < index && node !== null; i++) {
            node = node.next;
        }
        return node;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
exports["default"] = LinkedList;
