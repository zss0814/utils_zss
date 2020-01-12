//实现切片，截取数组的一部分
export function slice(array,start,end) {
  let arr = [];
  if(array.length===0){
    return arr;
  }
  start = start || 0;
  end = end || array.length;
  if(start < 0){
    start = 0;
  }
  if(end > array.length){
    end = array.length;
  }
  
  for (let index = start; index < end; index++) {
    arr.push(array[index]);
  }
  return arr;
}