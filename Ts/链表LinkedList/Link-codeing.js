"use strict";
exports.__esModule = true;
var LinkedList_1 = require("./LinkedList");
var linklist = new LinkedList_1["default"]();
linklist.add(1);
linklist.add(2);
linklist.add(3);
linklist.add(4);
linklist.add(5);
// 单链表翻转
linklist.reverse();
console.log(JSON.stringify(linklist));
