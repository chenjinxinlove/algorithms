nums = [1,0,1,1], k = 1, t = 2

var containsNearbyAlmostDuplicate = function(nums, k, t) {
    const record = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (record.has(nums[i])) {
            return true;
        }
        
        record.add(nums[i]);
        
        if (record.size == k + 1) {
            record.delete(nums[i-k]);
        }
    }
    return false;
};

// containsNearbyAlmostDuplicate(nums, k, t)
const group = (arr) =>
  arr.reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(i);
    return acc;
  }, {});

var groupAnagrams = function(strs) {
   const result = [];
   const sortStrs = strs.map(str => [...str].sort().join(''));
   const sortObj = group(sortStrs);
   Object.keys(sortObj).forEach((key) => {
        indexArr = sortObj[key].map(val => strs[val])
        result.push(indexArr);
   });
   return result;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

// console.log(groupAnagrams(strs))


var numberOfBoomerangs = function(points) {
    
};

var points = [[[0,0],[1,0],[2,0]]]

// console.log(numberOfBoomerangs(points))

function dis (pa, pb) {
    return (pa[0] - pb[0]) * (pa[0] - pb[0]) + (pa[1] - pb[1]) * (pa[1] - pb[1])
}

var numberOfBoomerangs = function(points) {
    let res = 0;
    for (let i = 0; i < points.length; i++) {
        var map = new Map();
        for (let j = 0; j < points.length; j++) {
            if (j != i){
                var dist = dis(points[i], points[j]);
                map.set(dist, (map.get(dist) || 0) + 1);
            }            
        }
        map.forEach(value => {
            if (value >= 2) {
                res += (value) * (value - 1);
            }
        })
    }
    return res;
};

// console.log(numberOfBoomerangs(points))


var isHappy = function(n) {
    const recore = new Set();
    function isH (i) {
        const res =  [...('' + i)].reduce((acc, val) => {
           acc +=Number(val * val);
            return acc;
        }, 0)
        if (res == 1){
            return true
        }
        if (recore.has(res)) {
            return false
        } 
        recore.add(res);
        
        return isH(res);
    }
    return isH(n);
};

console.log(isHappy(21))

var wordPattern = function(pattern, str) {
    const patternArr = [...pattern];
    const strArr = str.split(' ');
    if (patternArr.length !== strArr.length) {
        return false;
    }
    const record = new Map();
    for(let i = 0; i < patternArr.length; i++) {
        if (record.has(patternArr[i])) {
            if (record.get(patternArr[i])!== strArr[i]) {
                return false;
                break;
            }
        } else {
            record.set(patternArr[i], strArr[i])
        }
    }
    const a = [...new Set(record.values())]
    if (record.size == a.length){
        return true;
    } else {
        return false;
    }
};

// wordPattern("abba", "dog cat cat dog")

var frequencySort = function(s) {
    const sArr = [...s];
    const record = new Map();
    
    sArr.forEach(value => {
        record.set(value, (record.get(value) || 0) + 1)
    })
    return sArr.sort((a,b) => record.get(b) == record.get(a) ? a.charCodeAt(0) - b.charCodeAt(0) : record.get(b) - record.get(a)).join('');
};

frequencySort('Aabb')