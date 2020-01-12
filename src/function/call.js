export function call(fn,obj,...args) {
  if(obj===undefined || obj === null){
    obj = window;
  }
  obj.tempFn = fn;
  const result = obj.tempFn(...args);
  delete obj.tempFn;
  return result;
}