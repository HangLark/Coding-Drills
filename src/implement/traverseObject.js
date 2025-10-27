const symbol = Symbol('SYMBOL')
const person = {
  name: 'lark',
  age: 18,
}
person.self = person
person[symbol] = 'SYMBOL'

// 通用遍历形式
for (const [k, v] of Object.entries(person)) {
  console.log(k, v)
}
// 不遍历原型链 包括不可枚举属性 包含Symbol
for (const key of Reflect.ownKeys(person)) {
  console.log(key, person[key])
}
