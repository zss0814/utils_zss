//map,reduce,filter,find,findIndex,every,some
export function map(array,callback) {
  let arr = [];
  array.forEach((item,index) => {
    let result = callback(item,index);
    arr.push(result);
  });
  return arr;
}

export function reduce(array,callback,initValue) {
  let total = initValue;
  array.forEach((item,index) => {
    total = callback(total,item,index);
  })
  return total;
}

export function filter(array,callback) {
  let arr = [];
  array.forEach((item,index) => {
    if(callback(item,index)){
      arr.push(item);
    }
  })
  return arr;
}
export function find(array,callback) {
  for (let index = 0; index < array.length; index++) {

    if(callback(array[index],index)){
      return array[index];
    }
  }
  return undefined;
}
export function findIndex(array,callback) {
  for (let index = 0; index < array.length; index++) {

    if(callback(array[index],index)){
      return index;
    }
  }
  return -1;
}

export function every(array,callback) {
  for (let index = 0; index < array.length; index++) {
    if(!callback(array[index],index)){
      return false
    }
    
  }
  return true;
}

export function some(array,callback) {
  for (let index = 0; index < array.length; index++) {
    if(callback(array[index],index)){
      return true
    }
    
  }
  return false;
}