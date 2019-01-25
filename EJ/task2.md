//6，7感觉挺难的，我得再想想
## 1.
```
1
2
5
4
```
## 2. 继承,派生属性的覆盖
```
2￼￼￼
```
## 3. Object.create(null)新创建的对象除了自身属性之外，原型链上没有任何属性，也就是没有继承Object的任何东西
```
false
true
true￼
```
## 4.object.prototype.toString.call()判断obj这个对象的类型,输出格式为[Object Type],用slice截取有用数据

## 5.只有当writable: true时用Object.defineProperty定义的属性才可以修改

对于**Object.defineProperty**：
1. writable: true/false  属性值是否可以重写，默认false
2. enumerable：true/false 此属性是否可以被枚举（使用for...in或Object.keys()），默认false
3. configurable：用法同上，是否可以删除目标属性或是否可以再次修改属性的特性；
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
- new:
    - 当代码`new Foo{...}`执行时，一个继承自`Foo.prototype`的新对象被创建，并将this绑定到新创建的对象
    - 可以使用`Foo.prototype`属性将共享属性添加到以前定义的对象类型。这定义了一个由该函数创建的所有对象共享的属性，而不仅仅是对象类型的其中一个实例。
- **变量声明提升**：解析器会将当前作用域内声明的所有变量和函数都放到作用域的开始处，但是，只有变量的声明被提前到作用域的开始处了，而赋值操作被保留在原处。
```
function() {
  console.log(a);//undefined
  var a = "Now it's defined!";
  console.log(a);//"Now it's defined!"
}
```
- **函数声明提升**：
    - funca:JavaScript 解释器允许你在函数声明之前使用，也就是说，函数声明并不仅仅是函数名被“提前”了，整个函数的定义也被“提前”了
    - funcb:funcb函数变量被“提前”了，但是他的赋值（也就是函数）并没有被提前
    - 即函数声明方式定义函数整个被提前，而函数直接量定义函数只有变量被提前
```
funca();//"Definition hoisted!"
funcb();//抛出错误：undefined is not a function
 
function funca() {  
    console.log("Definition hoisted!");
}
var funcb = function () {  
    console.log("Definition not hoisted!");
};
```

```
2
4
1
2 //返回一个构造器名字是`foo.f()`的对象
3 //调用函数`foo`实例化一个对象，然后调用该对象的`f`方法
3 //还没想通
```