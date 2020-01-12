export function myInstanceOf(target,Type) {
  let protoObj = target.__proto__;
  while(protoObj !== null){
    if(protoObj === Type.prototype){
      return true
    }else{
      protoObj = protoObj.__proto__;
    }
  }
  return false;
}