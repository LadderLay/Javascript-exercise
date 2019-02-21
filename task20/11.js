//for in、for of、forEach的区别？这里用forEach报错，不知道是不是我写错了
//yield迭代器
function *flatten2 (arr) {
  for(let item of arr) {
    Array.isArray(item) ? yield *flatten2(item) : yield item;
  }
}