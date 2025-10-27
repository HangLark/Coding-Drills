function hasCircularReference(obj, seen = new WeakSet()) {
  if (typeof obj === 'object' && obj !== null) {
    if (seen.has(obj)) {
      return true
    }
    seen.add(obj)
    for (const key of Object.keys(obj)) {
      if (hasCircularReference(obj[key], seen)) return true
    }
    seen.delete(obj)
  }
  return false
}

const obj1 = {}
const obj2 = { obj1: obj1 }
obj1.obj2 = obj2
console.log(hasCircularReference(obj1))

const leaf = {}
const a = { x: leaf }
const b = { y: leaf }
const root = { a, b }
console.log(hasCircularReference(root))
