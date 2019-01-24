## 1.
```
1
2
5
4
```
## 2. 继承,派生属性的覆盖
```
2
```
## 3. Object.create(null)新创建的对象除了自身属性之外，原型链上没有任何属性，也就是没有继承Object的任何东西
```
false
true
true
```
## 4.object.prototype.toString.call()判断obj这个对象的类型,输出格式为[Object Type],用slice截取有用数据

## 5.只有当writable: true时用Object.defineProperty定义的属性才可以修改

对于**Object.defineProperty**：
1.writable: true/false  属性值是否可以重写，默认false
2.enumerable：true/false 此属性是否可以被枚举（使用for...in或Object.keys()），默认false
3.configurable：用法同上，是否可以删除目标属性或是否可以再次修改属性的特性；
  即两个作用：1.目标属性是否可以使用delete删除2.目标属性是否可以再次设置特性true/false

```
false
true
hi
true
false
```
## 6.
- 全局变量和局部变量：当全局变量跟局部变量重名时，局部变量的scope会覆盖掉全局变量的scope，当离开局部变量的scope后，又重回到全局变量的scope。
- 当一个函数没有明确的调用对象的时候，也就是单纯作为独立函数调用的时候，将对函数的this使用默认绑定：绑定到全局的window对象
```
0
1
0
0
undefined//**？不懂？**
0
```

## 7.
