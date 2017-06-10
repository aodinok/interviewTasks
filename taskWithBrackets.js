const someStr = '({(sdf + 34){234+34}})'

const stack = []

const isOpeningBracket = (chr) => ['(', '{'].indexOf(chr) >= 0
const isClosingBracket = (chr) => [')', '}'].indexOf(chr) >= 0

function checkBrackets (bracketsStr) {
  for (let i = 0; i < someStr.length; i++) {
    if (isOpeningBracket(someStr[i])) {
      stack.push(someStr[i])
    }
    if (isClosingBracket(someStr[i])) {
      const lastBracket = stack.pop()
      switch (someStr[i]) {
        case ')': if (lastBracket !== '(') return false; break
        case '}': if (lastBracket !== '{') return false; break
      }
    }
  }
  return stack.length === 0
}

console.log(checkBrackets(someStr))
