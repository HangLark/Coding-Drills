const phone = {
  brand: 'iPhone',
  color: 'silver',
}
const person = {
  name: 'lark',
  age: 18,
  belongings: [phone],
}

const newPerson = Object.assign(person)
newPerson.belongings[0].brand = 'huawei'
console.log(person)
