/* 
  事件总线
*/
//匿名函数自调用,用来直接在html中引入
// (function(window) {
//   let eventBus = {};

//   window.eventBus = eventBus;
// })(wwindow);


//此处为封装工具函数，利用es6或者。。。

let eventBus = {};
let callbacks = {};
eventBus.on = function (name,callback) {
  //手机回调函数
  if(callbacks.hasOwnProperty(name)){
    callbacks[name].push(callback);
  }else{
    callbacks[name] = [callback];
  }
}
eventBus.off = function (name) {
  if(name){
    delete callbacks[name];
  }else{
    callbacks = {};
  }
}
eventBus.emit = function (name,data) {
  if(callbacks[name]){
    callbacks[name].forEach(callback => {
      callback(data);
    });
  }
  
}
export default eventBus;
