//...扩展运算符
Map.prototype.filterKeys = function(fn){
  return new Map([...this].filter(([a, b]) => fn(a)));
}
Map.prototype.filterValues = function(fn){
  return new Map([...this].filter(([a, b]) => fn(b)));
}