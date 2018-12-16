function useArguments() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
    return sum;
}
//arguments:类数组对象，有length属性，存储的是当前传入函数参数的个数