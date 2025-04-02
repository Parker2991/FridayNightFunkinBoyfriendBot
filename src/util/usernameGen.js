function usernameGen () {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let username = '';
  for (let i = 0; i < 3 + Math.floor(Math.random() * 14); i++ ) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    username += characters[randomIndex];
  }
  return username;
}
module.exports = usernameGen;
