const generateRandomArray = require('./sortHelper');

function bubbleSort(arr) {
	const len = arr.length
	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				// 相邻元素两两对比
				// let temp = arr[j + 1] // 元素交换
				// arr[j + 1] = arr[j]
        // arr[j] = temp
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
		}
	}
	return arr
}

function bubbleSortEs(arr) {
	const len = arr.length
	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				// 相邻元素两两对比
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]]
			}
		}
	}
	return arr
}


const arr = generateRandomArray(10000, 1,50);

// console.time()
// console.log(bubbleSort(arr))
// console.timeEnd()
// console.log('----------')
// console.time()
// bubbleSortEs(arr)
// console.timeEnd()

function selectionSort(arr) {
	let len = arr.length
	let minIndex, temp
	for (let i = 0; i < len - 1; i++) {
		minIndex = i
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				// 寻找最小的数
				minIndex = j // 将最小数的索引保存
			}
		}
		// temp = arr[i]
		// arr[i] = arr[minIndex]
    // arr[minIndex] = temp
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
	}
	return arr
}
// console.time()
// selectionSort(arr)
// console.timeEnd()

function insertionSort(arr) {
	let len = arr.length
	let preIndex, current
	for (let i = 1; i < len; i++) {
		preIndex = i - 1
		current = arr[i]
		while (preIndex >= 0 && arr[preIndex] > current) {
			arr[preIndex + 1] = arr[preIndex]
			preIndex--
		}
		arr[preIndex + 1] = current
	}
	return arr
}

// console.time()
// insertionSort(arr)
// console.timeEnd()

function shellSort(arr) {
	let len = arr.length,
		temp,
		gap = 1
	while (gap < len / 3) {
		// 动态定义间隔序列
		gap = gap * 3 + 1
	}
	for (gap; gap > 0; gap = Math.floor(gap / 3)) {
		for (let i = gap; i < len; i++) {
			temp = arr[i]
			for (var j = i - gap; j > 0 && arr[j] > temp; j -= gap) {
				arr[j + gap] = arr[j]
			}
			arr[j + gap] = temp
		}
	}
	return arr
}

// console.time()
// shellSort(arr)
// console.timeEnd()


function inSort(arr) {
  let len = arr.length
  for(let i  = 1; i < len; i++) {
    for(let j = i; j > 0 && arr[j] < arr[j-1]; j-- ) {
      [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
    }
  }
  return arr;
}

function inSort(arr) {
	let len = arr.length
	for (let i = 1; i < len; i++) {
    let e = arr[i];
		for ( let j = i; j > 0 && arr[j - 1] > e; j--) {
			  arr[j] = arr[j-1]
    }
    arr[j] = e;
	}
	return arr
}

console.time()
console.log(inSort(arr))
console.timeEnd()