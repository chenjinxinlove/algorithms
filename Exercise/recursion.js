// 求1-100的和
// fn(n) = fn(n-1) + n
function sum(n) {
    if (n === 1) {
        return 1;
    }
    return sum(n - 1) + n;
}
console.log(sum(100));
/**
 * LeeCode  256
 * @param {number} num
 * @return {number}  
 */
// var addDigits1 = function(num) {
// 	if (num < 9 && num > 0) {
// 		return num
//   }
//   const total = Array.from(`${num}`, (value) => Number(value)).reduce((acc, item) => {
//     return acc + item;
//   },)
// 	return addDigits(total);
// }
var addDigits = function name(num) {
    var total = 0;
    while (num) {
        total += num % 10;
        num = Math.floor(num / 10);
    }
    if (total.toString().length > 1) {
		return total && addDigits(total)
    }
    return total;
};
console.log(addDigits(38));




/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    var prev = null;
    var cur = head;
    var temp = null;
    while (cur !== null) {
        temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
}

// 链表的递归实现
var reverseList = function(H) {
	if (H === null || H.next === null)
		//链表为空直接返回，而H->next为空是递归基
		return H
	var newHead = reverseList(H.next) //一直循环到链尾
	H.next.next = H //翻转链表的指向
	H.next = null //记得赋值NULL，防止链表错乱
	return newHead //新链表头永远指向的是原链表的链尾
}