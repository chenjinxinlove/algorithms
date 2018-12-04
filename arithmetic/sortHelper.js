function generateRandomArray(n, rangeL, rangeR) {
  return Array(n).fill(0).map(x => Math.floor(Math.random() * (rangeR - rangeL) + rangeL))
}
module.exports = generateRandomArray