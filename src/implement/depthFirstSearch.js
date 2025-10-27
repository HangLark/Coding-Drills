function dfsEasy(obj) {
  if (typeof obj !== 'object' || obj === null) return
  for (const key of Reflect.ownKeys(obj)) {
    console.log(key)
    dfsEasy(obj[key])
  }
}

const obj = {
  a: {
    b: { c: { d: 'd' } },
  },
  e: {},
}
dfsEasy(obj)
