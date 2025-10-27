function hasCircularReference(obj, seen = new WeakSet()) {
  if (obj && typeof obj === 'object') {
    if (seen.has(obj)) {
      return true // 发现循环引用
    }
    seen.add(obj)
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (hasCircularReference(obj[key], seen)) {
          return true
        }
      }
    }
    seen.delete(obj) // 检查完当前对象后移除，避免误报
  }
  return false
}

const normalObj = {
  a: 1,
  b: {
    c: 2,
    d: [1, 2, 3],
  },
}

const circularObj = {
  a: 1,
  b: {},
}
circularObj.b.self = circularObj
circularObj.b.another = circularObj.b

console.log(hasCircularReference(circularObj))
