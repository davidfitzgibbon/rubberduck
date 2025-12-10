export default (val = false) => {
  if (typeof val == 'object') {
    return val[Math.floor(Math.random() * val.length)]
  }
  if (typeof val == 'number') {
    return Math.random() * val
  }

  return Math.random()
}
