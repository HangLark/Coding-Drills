// 深拷贝是递归实现的
function deepClone(src, hash = new WeakMap()) {
  if (src === null || typeof src !== 'object') return src
  if (hash.has(src)) return hash.get(src)
  const type = Object.prototype.toString.call(src)
  let clone
  switch (type) {
    case '[object Date]':
      clone = new Date(src)
      break
    case '[object RegExp]':
  }
}
