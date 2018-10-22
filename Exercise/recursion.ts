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