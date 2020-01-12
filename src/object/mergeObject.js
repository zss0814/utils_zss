//合并对象
import {concat} from '../array/concat'
export function mergeObject(...objs) {
  let result = {};
  objs.forEach(obj => {
    Object.keys(obj).forEach(key => {
      if(!result.hasOwnProperty(key)){
        result[key] = obj[key];
      }else{
        result[key] = concat([],result[key],obj[key]);
      }
    }) 
  })
  return result;
}