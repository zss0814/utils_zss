export function mergeArray(array,...arrays) {
  let result = [...array];
  arrays.forEach(itemArr => {
    itemArr.forEach(item => {
      if(result.indexOf(item)===-1){
        result.push(item);
      }
    })
  })
  return result;
}