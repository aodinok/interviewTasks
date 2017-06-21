const input1 = [
  {prop: 1, other: 'data'},
  {prop: 5, other: 'data'},
  {prop: 5, other: 'data'},
  {prop: 1, other: 'data'},
  {prop: 7, other: 'data'}
]

const input2 = [
  'string1',
  'string2',
  'string3',
  'string2',
  'string1'
]

const unique = (input, propName) => {
  if (!input) return []

  const uniqueSet = new Set()
  return input.filter(i => {
    const value = propName ? i[propName] : i
    if (!uniqueSet.has(value)) {
      uniqueSet.add(value)
      return true
    }
  })
}

console.log(unique(input1, 'prop'))
console.log(unique(input2))

console.log([...(new Set(input2))]) // works for non objects arrays
