//函数节流（间隔一定事件执行一次）
import {call} from './call';
export function throttle(callback,delay) {
  let pre = 0;
  return () => {
    let current = Date.now();
    if(current-pre>delay){
      call(callback,this,arguments);
      //callback(event);//这样this发生了改变
      pre = current;
    }  
  }
}