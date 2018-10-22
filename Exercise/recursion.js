// 求1-100的和
// fn(n) = fn(n-1) + n
function sum(n) {
    if (n === 1) {
        return 1;
    }
    return sum(n - 1) + n;
}
console.log(sum(100));
var addDigits = function (num) {
    if (num < 9 && num > 0) {
        return num;
    }
    var total = Array.from("" + num, function (value) { return Number(value); }).reduce(function (acc, item) {
        return acc + item;
    });
    return addDigits(total);
};
addDigits(23333);
