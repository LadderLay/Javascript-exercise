//...扩展运算符,用于可变参数个数的函数调用
//reduceRight,从右往左   reduce(function, initialValue)
const compose = (...fns) => {
  return n => fns.reduceRight((a, b) => b(a), n);
}