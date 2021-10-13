function solution (A) {
  const N = A.length
  const M = A[0].length

  const B = Array.from({ length: N * M }).map(_ => false)
  const Q = [[0, 0]]

  let c = 1
  let i
  let j
  let k = 1

  B[0] = true

  while (true) {
    if (Q.length) {
      const item = Q.shift()
      i = item[0]
      j = item[1]
    } else {
      while (B[k]) { ++k }

      if (k === B.length) break

      B[k] = true

      ++c
      i = Math.floor(k / M)
      j = k % M
    }

    if (
      j + 1 < M &&
      A[i][j] === A[i][j + 1] &&
      !B[i * M + j + 1]
    ) {
      B[i * M + j + 1] = true
      Q.push([i, j + 1])
    }

    if (
      i + 1 < N &&
      A[i][j] === A[i + 1][j] &&
      !B[(i + 1) * M + j]
    ) {
      B[(i + 1) * M + j] = true
      Q.push([i + 1, j])
    }

    if (
      j > 0 &&
      A[i][j] === A[i][j - 1] &&
      !B[i * M + j - 1]
    ) {
      B[i * M + j - 1] = true
      Q.push([i, j - 1])
    }

    if (
      i > 0 &&
      A[i][j] === A[i - 1][j] &&
      !B[(i - 1) * M + j]
    ) {
      B[(i - 1) * M + j] = true
      Q.push([i - 1, j])
    }
  }

  return c
}
