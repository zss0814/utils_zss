//深度克隆
export function deepClone(target) {
  let result;
  if(target instanceof Array){
    result = [];
    target.forEach(item => {
      result.push(deepClone(item));
    })
    return result;
  }else if(typeof target==='object' && target !== null){
    result = {};
    Object.keys(target).forEach(key => {
      
    })
  }else{
    return target;
  }
}