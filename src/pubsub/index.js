// 消息订阅于发布
/*
  类似于事件总线
  不同的是：消息订阅中的回调函数有一个唯一的token返回值
*/

let PubSub = {};
let callbacks = {};
let id = 0;
PubSub.subscribe = function (name,callback) {
  let token = 'token' + ++id;
  if(callbacks.hasOwnProperty(name)){
    callbacks[name][token] = callback;
  }else{
    callbacks[name] = {};
    callbacks[name][token] = callback;
  }
  return token;
}
//异步
PubSub.publish = function (name,data) {
  if(callbacks.hasOwnProperty(name)){
    setTimeout(() => {
      Object.keys(callbacks[name]).forEach((key) => {
        callbacks[name][key](data);
      })
    });
  }
  
  
}

//同步
PubSub.publishSync = function (name,data) {
  if(callbacks.hasOwnProperty(name)){
    Object.keys(callbacks[name]).forEach((key) => {
      callbacks[name][key](data);
    })
  }
  
}
PubSub.unsubscribe = function (flag) {
  if(!flag){
    callbacks = {};
  }else{
    if(flag.indexOf('token') !== -1){
      //找到flag对应的事件名回调,因为此处用的是value，所以得到不是name，而是name对应的值，也就是那个对象
      let callback = Object.values(callbacks).find(callback => {
        return callback.hasOwnProperty(flag);
      })
      //console.log(callback);
      delete callback[flag];
      
    }else{
      delete callbacks[flag];
    }
  }
}
export default PubSub;