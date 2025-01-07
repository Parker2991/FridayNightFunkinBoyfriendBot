function generateHash () {
  const sha256 = crypto.createHash('sha256')
  sha256.update(Math.floor(Date.now() / 10000) + config.keys.normalKey).digest('hex').substring(0, 16)
}
//can i rename this to hash.js rq?