//如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割,得到一个字符串数组
//String.split() ,和Array.join 执行相反操作。
const isAnagram = (str1, str2) => {
  let s1 = str1.split("").sort().join("");
  let s2 = str2.split("").sort().join("");
  return s1 === s2;//不需要再写一个判断语句了
}