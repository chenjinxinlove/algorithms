// 求1-100的和
// sum(n) == sum(n-1) + n
function sum(n:number) {
  if (n === 1) {
    return 1;
  }
  return sum(n-1) + n;
}

console.log(sum(100));

