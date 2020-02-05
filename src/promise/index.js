
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';
export function Promise(excutor) {
  this.status = PENDING;
  this.data = undefined;
  let self = this;
  self.callbacks = [];
  function resolve(value) {
    if(self.status !== PENDING) return;
    self.status = RESOLVED;
    self.data = value;
    setTimeout(() => {
      self.callbacks.forEach(callback => {
        callback.onResolved(self.data)
      })
    });
    
  }
  function reject(reason) {
    if(self.status !== PENDING) return;
    self.status = REJECTED;
    self.data = reason;
    setTimeout(() => {
      self.callbacks.forEach(callback => {
        callback.onRejected(self.data)
      })
    });
    
  }

  //改变promise的状态的方法：通过调用resolve、reject，抛出异常
  try {
    excutor(resolve,reject);
  } catch (error) {
    reject(error);
  }
  
  
}

Promise.prototype.then = function (onResolved,onRejected) {
  //分为两种情况：1、先修改promise的状态，则直接调用对应的回调函数
  //2、先将回调函数保存起来，然后再修改promise的状态（多数是这种情况，在执行器函数中开启异步任务）
  //通过判断当前promise的状态，来决定如何处理回调函数
  let self = this;

  //解决onResolved或onRejected未指定，即给其指定默认值
  onResolved = typeof onResolved === 'function' ? onResolved : value => value;
  onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};


  return new Promise((resolve,reject) => {
    //通过.then的回调的结果决定返回的新的promise的状态
    function handle(callback) {
      let result
      try {
        result = callback(self.data);
      } catch (error) {
        reject(error);
      }
      if(result instanceof Promise){
        result.then(resolve,reject);
      }else{
        resolve(result);
      }
    }


    //由于then中的回调函数是异步的（微队列），微队列用到的是栈，此处用的是宏队列的延时定时器
    if(self.status === RESOLVED){
      setTimeout(() => {
        handle(onResolved);
      });
      
    }else if(self.status === REJECTED){
      setTimeout(() => {
        handle(onRejected);
      });
      
    }else{
      //pending状态将回调函数保存起来
      self.callbacks.push({
        //存储的函数也需要有handle来决定then返回的新的promise的状态
        onResolved:function () {
          handle(onResolved);
        },
        onRejected(){
          handle(onRejected);
        }
      })
    }
    
    
    
  })
  
  
  
}

Promise.prototype.catch = function (onRejected) {
  return this.then(undefined,onRejected);
}

Promise.reject = function (result) {
  return new Promise((resolve,reject) => {
    reject(result);
  })
}

Promise.resolve = function (result) {
  //result有可能是一个promise
  return new Promise((resolve,reject) => {
    if(result instanceof Promise){
      result.then(resolve,reject);
    }else{
      resolve(result);
    }
  })
  
}

//第一个返回的promise决定返回的promise的状态
Promise.race = function (promises) {
  return new Promise((resolve,reject) => {
    promises.forEach((promise) => {
      promise.then(resolve,reject);
    })
  })
}

Promise.all = function (promsies) {
  return new Promise((resolve,reject) => {
    let count = 0;
    let values = []; 
    promsies.forEach((p,index) => {
      p.then(
        value => {
          count++;
          values[index] = value;
          if(count===promises.length){
            resolve(values);
          }
        },
        reason => {
          reject(reason);
        }
      )
    })
  })
}
