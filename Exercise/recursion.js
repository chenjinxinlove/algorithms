// // 求1-100的和
// // fn(n) = fn(n-1) + n
// function sum(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return sum(n - 1) + n;
// }
// console.log(sum(100));
// /**
//  * LeeCode  256
//  * @param {number} num
//  * @return {number}  
//  */
// // var addDigits1 = function(num) {
// // 	if (num < 9 && num > 0) {
// // 		return num
// //   }
// //   const total = Array.from(`${num}`, (value) => Number(value)).reduce((acc, item) => {
// //     return acc + item;
// //   },)
// // 	return addDigits(total);
// // }
// var addDigits = function name(num) {
//     var total = 0;
//     while (num) {
//         total += num % 10;
//         num = Math.floor(num / 10);
//     }
//     if (total.toString().length > 1) {
// 		return total && addDigits(total)
//     }
//     return total;
// };
// console.log(addDigits(38));




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

function fibonacci_nornal(n) {
    if (n === 0) {
        return 0;
    } if (n === 1) {
        return 1;
    }
    return fibonacci_nornal(n-1) + fibonacci_nornal(n-2);
}
var cache = {
    0: 0,
    1: 1
}
function fibonacci_cache(n) {
    if (typeof cache[n] === 'number') {
        return cache[n];
    }
    var result = cache[n] = fibonacci_cache(n-1) + fibonacci_cache(n-2);
    return result;
}

// var start1 = new Date();
// var result1 = fibonacci_nornal(50);
// var end1 = new Date();

// console.log('fibonacci_nornal(%d) = %d, use time %dms.',
//     50,
//     result1,
//     end1.getTime() - start1.getTime());

function fib(n) {
    function fib_(n, a, b) {
        if (n == 0) return a
        else return fib_(n - 1, b, a + b)
    }
    return fib_(n, 0, 1)
}

function fibonacci(n) {
    var curvalue = 1
    var prevalue = 0
    var nextvalue = curvalue;
    for (var i = 1; i <= n; i++) {
        prevalue = curvalue;
        curvalue = nextvalue
        nextvalue = curvalue + prevalue
    }
    return nextvalue
}

var start2 = new Date();
var result2 = fibonacci(500);
var end2 = new Date();

console.log('fibonacci_cache(%d) = %d, use time %dms.',
    50,
    result2,
    end2.getTime() - start2.getTime());