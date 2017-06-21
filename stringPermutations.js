function permute (string, prefix = '') {
  if (!string.length) {
    return [prefix]
  }
  let out = []
  for (let i = 0; i < string.length; i++) {
    const pre = string.substring(0, i)
    const post = string.substring(i + 1)
    out = [...out, ...permute(pre + post, string[i] + prefix)]
  }
  return out
}

console.log(permute('ABC'))
