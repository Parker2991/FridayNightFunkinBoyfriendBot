const crypto = require('crypto');
const sus = 'meow';
//const amogus = crypto.createHash('sha256').update(Math.floor(Date.now() / 10000) + bot.validation.keys.trustedKey).digest('hex').substring(0, 16)
const amogus = crypto.createHash('sha256').update(sus).digest('hex')
console.log(amogus)

