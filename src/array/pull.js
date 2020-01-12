export function pull(array,...values) {
  let result = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(values.indexOf(element) !== -1){
      array.splice(index,1)
      result.push(element);
      index--;
    }
  }
  return result;
}
export function pullAll(array,values){
  return pull(array,...values);
}