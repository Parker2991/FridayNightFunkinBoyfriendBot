const { translate } = require('@vitalets/google-translate-api')
module.exports = {
name:'translate',
   description:['<language 1> <language 2> <message>'],
        aliases:['translation'],
   trustLevel: 0,
  async execute (context) {
const bot = context.bot
const args = context.arguments

    try {
      const res = await translate(args.slice(2).join(' '), { from: args[0], to: args[1] })
      bot.tellraw( [{ text: 'Result: ', color: 'gold' }, { text: res.text, color: 'green' }])
    } catch (e) {
      bot.tellraw( { text: String(e), color: 'red' })
    }
  }
}
