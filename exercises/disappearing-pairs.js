function solution (S) {
  const h = S.length / 2

  if (Number.isInteger(h)) {
    const firstHalf = S.slice(0, h)
    const secondHalf = [...S.slice(h)].reverse().join('')

    if (firstHalf === secondHalf) return ''
  }

  let s = S

  while (true) {
    const { length } = s

    s = s.replace(/AA|BB|CC/g, '')

    if (s.length === length) return s
  }
}
