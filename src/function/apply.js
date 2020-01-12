import {call} from './call';
export function apply(fn,obj,...args1) {
  return (...args2) => {
    call(fn,obj,...args1,...args2)
  }
}