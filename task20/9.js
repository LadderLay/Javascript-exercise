//sections里面的index不一定是有序的
const injectSections = (items, sections) => {
  let cnt = 0;
  sections.sort((a,b) => a.index - b.index);//
  for(let n of sections){
    items.splice(n.index + cnt,0,n.content);
    cnt++;
  }
  return items;
}