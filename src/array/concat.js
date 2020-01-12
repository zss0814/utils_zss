//合并数组
export function concat(array,...args) {
  let arr = [...array];
  args.forEach((item,index) => {
    if(item instanceof Array){
      arr.push(...item);
    }else{
      arr.push(item);
    }
    
  })
  return arr;
}