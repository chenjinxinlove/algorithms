// 求1-100的和
// fn(n) = fn(n-1) + n
function sum(n: number) {
  if (n === 1) {
    return 1;
  }
  return sum(n-1) + n;
}

console.log(sum(100));

/**
 * LeeCode  258
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


var addDigits = function name(num:number) {
  if (num < 9 && num > 0) {
		return num
  }
  let total: number = 0;
  while (num) {
    total += num % 10;
    num = Math.floor(num/10);
  }
  return addDigits(total);
}

addDigits(38);

// var prev = null;
//         var cur = this.head;
//         var temp = null;
//         while (cur !== null) {
//             temp = cur.next;
//             cur.next = prev;
//             prev = cur;
//             cur = temp;
//             console.log(JSON.stringify(this));
//         }
//         temp = this.head;
//         this.head = this.tail;
//         this.tail = temp;
/**反转一个单链表。  206
 * Definition for singly-linked list.
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NUL
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
  
};