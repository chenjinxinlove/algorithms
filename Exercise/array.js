

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




var lengthOfLongestSubstring = function(s) {
    let r = -1;
    let l = 1;
    let res = 0;
    let freq = Array(256).fill(0);
    while(l < s.length) {
        if (r + 1 < s.length && freq[s[r+1]] == 0) {
            r++;
            freq[s[r]]++;
        } else {
            freq[s[l]]--;
            l++;
        }
        res = Math.max(res, r-l+1);
    }
    return res;
};

lengthOfLongestSubstring('abcabcbb')