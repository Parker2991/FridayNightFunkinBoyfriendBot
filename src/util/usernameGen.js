function usernameGen (bot, config) {
//  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  const unicode = "▄".codePointAt(0).toString(16);
  const unicodeGen = "\\u" + "0000".substring(0, 4 - unicode.length) + unicode;
  if (bot.options.isSavage || bot.options.isCreayun && !bot.options.isKaboom) {
    characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  } else {
    characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-+={]}[|\\:;>.<,/?ඞ♋'
  }
  let username = '';
  for (let i = 0; i < 10; i++ ) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    username += characters[randomIndex];
  }
  return username;
}
module.exports = usernameGen;
