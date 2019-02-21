const digitCounts = function (k, n) {
    let cnt = 0;
    for(let i = 0; i <= n; i++){
        for(let y of i.toString()){
            if(y == k)  cnt++;
        }
    }
    return cnt;
}