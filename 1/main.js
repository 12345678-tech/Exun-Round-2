let a = (num) => {
  return num+1
}
let b = (num) => {
  return num*30
}
let chain = (value,fn) => {
  let val = value;
  for(let i = 0 ; i < fn.length ; i++ ) {
    val = fn[i](val)
  }
  return val
}
console.log(chain(2,[a,b]))