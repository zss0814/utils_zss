import {call} from './call';
export function debounce(callback,delay) {
  return () => {

    if(this.hasOwnProperty('timeId')){
      clearTimeout(this.timeId);
    }
    
    this.timeId = setTimeout(() => {
      console.log(this);
      call(callback,this,arguments);
      delete this.timeId;//当该回调函数执行完需要将timeId删除，不然this上回多一个timeId属性
      //如果回调函数没有执行timeId不能删除，设置该属性就是为了清除定时器（每一次都对timeId重新赋值）
    }, delay);
    
    
  }
}