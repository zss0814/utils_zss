export function unique1(array) {
  let arr = [];
  let cotainer = {};
  array.forEach((item,index) => {
    if(!cotainer.hasOwnProperty(item)){
      arr.push(item);
      cotainer[item] = true;
    }
  });
  return arr;
}
export function unique2(array) {
  return Array.from(new Set(array));
}