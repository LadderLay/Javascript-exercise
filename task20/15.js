//Q：数组处理空对象？
//forEach(),map()等会跳过空位
//in操作符会在通过对象能够访问给定属性时返回布尔值
const fillEmpty = (arr) => {
  for(let i = 0; i < arr.length; i++){
    if(!(i in arr)){
      arr[i] = 'Hello'；
    }
  }
  return arr;
}