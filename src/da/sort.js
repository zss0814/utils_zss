export function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length-1-i; j++) {
      if(arr[j]>arr[j+1]){
        let temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

export function selectSort (array) {
  
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < array.length; j++) {
      if(array[minIndex]>array[j]){
        minIndex = j;
      }  
    }
    if(minIndex !== i){
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}

export function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let start = array[i];
    let j
    for (j = i-1; j >= 0; j--) {
      if(array[j]>start){
        array[j+1] = array[j];
      }else{
        break;//如果插入了就不用再往前比较了
      } 
    }
    array[j+1] = start;
  }
  return array;
}