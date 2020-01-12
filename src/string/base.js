// reverseString(str)  字符串反转 
// palindrome(str)   判断字符串是不是回文
// truncate(str,num)   截取字符串（如果字符串的长度超过了num，截取前面num长度，并以...结束）
export function reverseString(str) {
  return str.split('').reverse().join('');
}

export function palindrome(str) {
  return str === reverseString(str)
}

export function truncate(str,num) {
  if(str.length<=num){
    return str;
  }else{
    return str.slice(0,num) + '...'
  }
}