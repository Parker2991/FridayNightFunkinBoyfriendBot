/**
 * character allowed in mc chat
 * @param {String} character the character
 * @return {boolean} allowed
 */
function isAllowedCharacter (character) {
  return character !== '\xa7' && character !== '\x7f'
}
/**
 * mc chat check if contains illegal chars.
 * @param {String} string the string
 * @return {boolean} if contains then true else false
 */
function containsIllegalCharacters (string) {
  for (let i = 0; i < string.length; i++) if (!isAllowedCharacter(string[i])) return true
}

module.exports = { containsIllegalCharacters, isAllowedCharacter }
