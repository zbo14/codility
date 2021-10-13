function solution (X, Y) {
  const xmap = {}
  const ymap = {}

  const verts = {}
  const horzs = {}

  let d = 0

  for (let i = 0; i < X.length; i++) {
    const x = X[i]
    const y = Y[i]
    const coord = [x, y]

    const xm = xmap[x] || []
    const ym = ymap[y] || []

    const len = Math.max(xm.length, ym.length)

    for (let i = 0; i < len; i++) {
      const y2 = xm[i]
      const x2 = ym[i]

      if (Number.isInteger(y2) && Math.abs(y - y2) % 2 === 0) {
        const vert = [y, y2].sort()
        const y3 = (y + y2) / 2
        const mids = verts[x] = verts[x] || {}
        mids[y3] = mids[y3] || 0
        ++mids[y3]

        d += (horzs[y3] || {})[x] || 0
      }

      if (Number.isInteger(x2) && Math.abs(x - x2) % 2 === 0) {
        const horz = [x, x2].sort()
        const x3 = (x + x2) / 2
        const mids = horzs[y] = horzs[y] || {}
        mids[x3] = mids[x3] || 0
        ++mids[x3]

        d += (verts[x3] || {})[y] || 0
      }
    }

    xmap[x] = xmap[x] || []
    xmap[x].push(y)

    ymap[y] = ymap[y] || []
    ymap[y].push(x)
  }

  return d
}
