var fourSumCount = function(A, B, C, D) {
    const record = {};
    for (let i = 0; i < C.length; i ++) {
        for (let j = 0; j < D.length; j++) {
            if (record[ C[i] + D[j] ]) {
                record[ C[i] + D[j] ]++
            } else {
                record[ C[i] + D[j] ] = 1
            }
        }
    }
    let res = 0;
    console.log(record)
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (record[(0 - A[i] - B[j])]){
                res += record[0 - A[i] - B[j]]
            }
        }
    }
    return res;
};
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]
fourSumCount(A,B,C,D)