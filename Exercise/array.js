

var intersect = function(nums1, nums2) {
    const record = {};
    for (let i = 0; i < nums1.length; i++) {
        if (record[nums1[i]]) {
            record[nums1[i]]++;
        } else {
            record[nums1[i]] = 1;
        }
    }
    const result = [];
    for(let j = 0; j < nums2.length; j++) {
        if (record[nums2[j]] > 0) {
            result.push(nums2[j]);
            record[nums2[j]] --;
        }
    }
    return result;
};

intersect([1,2,3,4,4,1], [1,2,4,4])




var minSubArrayLen = function(s, nums) {
	let l = 0
	let r = -1 // 滑动窗口 nums[i...j]
	let sum = 0 // 记录找到的最大值
	let res = nums.length + 1 // 记录连续数组的长度

	while (l < nums.length) {
		if (r + 1 < nums.length && sum < s) {
			r++
			sum += nums[r]
		} else {
            sum -= nums[l]
            l++;
		}
		if (sum >= s) {
			res = Math.min(res, r - l + 1)
		}
	}
	if (res === nums.length) {
		return 0 // 没有找到答案返回0
	}
	return res
}
minSubArrayLen(7, [2, 3, 1, 2, 4, 3])