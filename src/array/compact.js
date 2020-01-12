//去除数组中所有真值
import {filter} from './base';
export function compact(array) {
  return filter(array,item => item);
}