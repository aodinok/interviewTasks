
function getBit (number, bitIndex) {
  const mask = 1 << bitIndex
  return (number & mask) !== 0
}

function setBit (number, bitIndex, bitValue) {
  const mask = ~(1 << bitIndex)
  return (number & mask) | (+!!bitValue << bitIndex)
}

console.log(getBit(45, 5)) // => `true`
console.log(setBit(45, 6, 1)) // => `109`
