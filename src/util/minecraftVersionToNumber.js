
function minecraftVersionToNumber (version) {
  const versionArray = version.split('.')
  if (versionArray.length === 2) return Number(version)
  versionArray.pop()
  return Number(versionArray.join('.'))
}

module.exports = minecraftVersionToNumber
