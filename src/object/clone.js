//由于for  in可以用于数组和对象，但效率比较低
export function clone(target) {
  let result;
  if(target instanceof Array){
    result = [];
    target.forEach(item => {
      result.push(item);
    })
    
  }else if(typeof target === 'object' && target !== null){
    result = {};
    // Object.keys(target).forEach(key => {
    //   result[key] = target[key];
    // })
    result = {...target};
  }else{
    return target;
  }
  return result;

  

}