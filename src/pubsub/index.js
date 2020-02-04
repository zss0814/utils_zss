// 消息订阅于发布
/*
  类似于事件总线
  不同的是：消息订阅中的回调函数有一个唯一的token返回值
*/

let PubSub = {};
let callbacks = {};
PubSub.subscribe = function (name,callback) {
  if(callbacks.hasOwnPProperty(name)){
    
  }else{
    
  }
}
PubSub.publish = function (name,data) {
  
}
PubSub.publishWSync = function (name,data) {
  
}
PubSub.unsubscribe = function (name) {
  
}