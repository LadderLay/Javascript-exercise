//unshift向数组开头添加元素
//递归，0、1是特殊情况
const arrWithoutLoop = (n) => {
  if(n === 0) {
    return [];
  }
  let result = [];
  result.unshift(n - 1);
  if (n === 1) {
    return result;
  } else {
    return arrWithoutLoop(n - 1).concat(result);//划重点
  }
};