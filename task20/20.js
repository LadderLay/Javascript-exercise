//[].slice.call(doms)类数组的转换
const getPageTags = () => {
  var doms = document.getElementsByTagName('*')
  var res = new Set([].slice.call(doms).map(dom => dom.tagName));
  return Array.from(res);
}
