/**
 * converts minecraft version to number (for example '1.19.2' will be 1.19)
 * @param {String} version
 * @return {Number} decimal number of the version you specified
 */
function minecraftVersionToNumber (version) {
  const versionArray = version.split('.')
  if (versionArray.length === 2) return Number(version)
  versionArray.pop()
  return Number(versionArray.join('.'))
}

module.exports = minecraftVersionToNumber
