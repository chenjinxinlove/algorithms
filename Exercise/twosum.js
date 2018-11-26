// O(n)的时间复杂度
// 使用map来实现
var twoSum = function(nums, target) {
  const record = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (record.has(complement)) {
      let arr = [record.get(complement), i]
      return arr;
    }
    record.set(nums[i], i);
  }
}


var majorityElement = function(nums) {
	const record = new Map()
	for (let i = 0; i < nums.length; i++) {
		record.set(nums[i], (record.get(nums[i]) || 0) + 1)
	}
	let res
	record.forEach((key, value) => {
		if (value > nums.length / 2) {
			res = key
		}
	})
	return res
}

majorityElement([3, 2, 3]);
