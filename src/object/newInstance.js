import {call} from '../function/call';
export function newInstance(Fn,...args) {
  let obj = {};
  let result = call(Fn,obj,...args);
  obj.__proto__ = Fn.prototype;
  if(result instanceof Object){
    return result;
  }else{
    return obj;
  }

}