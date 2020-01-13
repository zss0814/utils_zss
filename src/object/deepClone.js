//深度克隆
    // 1). 大众乞丐版
    //     问题1: 函数属性会丢失
    //     问题2: 循环引用会出错

    // 2). 面试基础版本
    //     解决问题1: 函数属性还没丢失
    //     问题2: 循环引用会出错

    // 3). 面试加强版本
    //     解决问题2: 循环引用正常
    // 4). 面试加强版本2(优化遍历性能)
    //     数组: while | for | forEach() 优于 for-in | keys()&forEach() 
    //     对象: for-in 与 keys()&forEach() 差不多
//通过map容器存克隆的对象,map的键对应的是变量的值（即该map中的键是target的值，map的值是克隆后的值即result）
//不能用对象存，因为对象的键是字符串，当存数组中的一项时，键就是下标，不能作为唯一标识
export function deepClone(target,map = new Map()) {
  let result;
  if(map.get(target)){
    return map.get(target);
  }
  if(target instanceof Array){
    result = [];
    map.set(target,result);
    target.forEach(item => {
      
      result.push(deepClone(item,map));
    })
    return result;
  }else if(typeof target==='object' && target !== null){
    result = {};
    map.set(target,result);
    Object.keys(target).forEach(key => {
      
      result[key] = deepClone(target[key],map);
    })
  }else{
    return target;
  }
  return result;
}