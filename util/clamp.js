function clamp (value, min, max) {
  if (value < min) return min
  return Math.min(value, max)
}

module.exports = clamp
