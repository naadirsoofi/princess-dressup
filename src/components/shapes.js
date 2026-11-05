const round = (n) => Math.round(n * 10) / 10;

export function starPath(cx, cy, r, inner = 0.45, points = 5) {
  const steps = points * 2;
  let d = '';
  for (let i = 0; i < steps; i += 1) {
    const radius = i % 2 === 0 ? r : r * inner;
    const angle = (Math.PI * i) / points - Math.PI / 2;
    d += `${i === 0 ? 'M' : 'L'}${round(cx + radius * Math.cos(angle))} ${round(cy + radius * Math.sin(angle))} `;
  }
  return `${d}Z`;
}

// Four point twinkle with curved sides.
export function sparklePath(cx, cy, r) {
  return `M${cx} ${cy - r} Q${cx} ${cy} ${cx + r} ${cy} Q${cx} ${cy} ${cx} ${cy + r} Q${cx} ${cy} ${cx - r} ${cy} Q${cx} ${cy} ${cx} ${cy - r} Z`;
}

export function heartPath(x, y, s) {
  return `M${x} ${y + s} C${x - s * 1.25} ${y + s * 0.15} ${x - s} ${y - s * 0.95} ${x} ${y - s * 0.3} C${x + s} ${y - s * 0.95} ${x + s * 1.25} ${y + s * 0.15} ${x} ${y + s} Z`;
}

// Trapezoid with a scalloped hem, used for skirt tiers.
export function scallopTier(topLeft, topRight, bottomLeft, bottomRight, yTop, yBottom, count, depth = 9) {
  const width = (bottomRight - bottomLeft) / count;
  let d = `M${topLeft} ${yTop} L${topRight} ${yTop} L${bottomRight} ${yBottom}`;
  for (let i = 0; i < count; i += 1) {
    const x0 = bottomRight - i * width;
    const x1 = x0 - width;
    d += ` Q${round((x0 + x1) / 2)} ${yBottom + depth} ${round(x1)} ${yBottom}`;
  }
  return `${d} Z`;
}

// Trapezoid with a pointed hem, used for the tutu.
export function zigzagTier(topLeft, topRight, bottomLeft, bottomRight, yTop, yBottom, count, depth = 12) {
  const width = (bottomRight - bottomLeft) / count;
  let d = `M${topLeft} ${yTop} L${topRight} ${yTop} L${bottomRight} ${yBottom}`;
  for (let i = 0; i < count; i += 1) {
    const x0 = bottomRight - i * width;
    d += ` L${round(x0 - width / 2)} ${yBottom - depth} L${round(x0 - width)} ${yBottom}`;
  }
  return `${d} Z`;
}

export function petalPath(bottomX, yBottom, width, yTop = 158) {
  const topX = round(100 + (bottomX - 100) * 0.25);
  return `M${topX} ${yTop} C${topX - width} ${yTop + 40} ${bottomX - width} ${yBottom - 22} ${bottomX} ${yBottom} C${bottomX + width} ${yBottom - 22} ${topX + width} ${yTop + 40} ${topX} ${yTop} Z`;
}

export function archWindow(x, y, w, h) {
  const r = w / 2;
  return `M${x} ${y + h} V${y + r} A${r} ${r} 0 0 1 ${x + w} ${y + r} V${y + h} Z`;
}
