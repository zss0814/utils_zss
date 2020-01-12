//数组扁平化，将多维数组转换成一位数组
import {some} from './base';
import {concat} from './concat';
import {reduce} from './base';

export function flatten1(array) {
  let arr = [];
  array.forEach((item,index) => {
    if(item instanceof Array){
      arr.push(...flatten1(item));
    }else{
      arr.push(item);
    }
  })
  return arr;
}

export function flatten2(array) {
  let arr = []
  reduce(array,(pre,item,index) => {
    if(item instanceof Array){
      arr.push(...flatten2(item));
    }else{
      arr.push(item);
    }
  })
  return arr;
  
}
export function flatten3(array) {
  let arr = concat([],...array);
  while(some(arr,(item) => Array.isArray(item))){
    arr = concat([],...arr);
  }
  return arr;
}