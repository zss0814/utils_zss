//先进先出
export function Queue() {
  let arr = [];
  this.enQueue = function (element) {
    arr.push(element);
    return arr.length;
  }
  this.deQueue = function () {
    return arr.shift();
  }
  this.front = function () {
    return arr[0];
  }
  this.size = function () {
    return arr.length;
  }
  this.isEmpty = function () {
    return arr.length===0;
  }
}

export function PriorityQueue() {
  let arr = [];
  this.enQueue = function (value,priority) {
    if(priority>100 || priority<0){
      alert('优先级必须在0-100之间');
      return;
    }
    if(arr.length===0){
      arr.push({value,priority});
    }else{
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element.priority>priority){
          arr.splice(index,0,{value,priority});
          return;
        }
      }
      arr.push({value,priority});
    }
    return arr.length;
  }
  this.deQueue = function () {
    return arr.shift();
  }
  this.front = function () {
    return arr[0];
  }
  this.size = function () {
    return arr.length;
  }
  this.isEmpty = function () {
    return arr.length === 0;
  }
}