import {concat} from './concat';
export  function differences(array,...arrays) {
  if(array.length===0){
    return []
  }
  if(arrays.length===0){
    return [...array];
  }
  
  let arr = concat([],...arrays);
  //console.log(arr);
  return array.filter(item => {
    return arr.indexOf(item)===-1
  })
   
}