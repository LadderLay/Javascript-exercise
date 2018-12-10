var num = [2,3,4,5,6,7];
num.pop();//删除最后一位
num.unshift(1);//向数组的开头添加元素
var squareNum = new Array();
var oddNum = new Array();
var j = 0;
var pro = 1;
for(var i = 0; i < num.length; i++)
{
    squareNum[i] = Math.pow(num[i], 2);
    if(squareNum[i] % 2)
    {
      oddNum[j] = squareNum[i];
      pro *= oddNum[j];
    }
}
//console.log(oddNum)；只能输出最后一个数
console.log(pro);