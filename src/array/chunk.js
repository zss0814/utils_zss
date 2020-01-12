//将一位数组拆成固定大小的二维数组

export function chunk1(array,size) {
  let bigArray = [];
  let smallArray = [];
  if(array.length === 0){
    return [];
  }
  if(size<1 || !size){
    size = 1
  }
  if(size>array.length){
    size = array.length;
  }
  array.forEach(item => {
    if(smallArray.length===0){
      bigArray.push(smallArray);
    }
    smallArray.push(item);
    if(smallArray.length === size){
      smallArray = [];
    }
  });
  return bigArray;
}

export function chunk2(array,size) {
  
}