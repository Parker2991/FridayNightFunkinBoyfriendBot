module.exports = {
  name: 'discord',
  alias: [],
  description: 'Shows the discord invite',
  usage: '',
  trusted: 0,
  execute (bot, username, sender, prefix, args, config, hash, ownerhash, selector) {
    bot.tellraw(selector, [
      {
        text: 'The Discord invite is ',
        color: 'white'
      },
      {
        text: 'https://discord.gg/xdgCkUyaA4',
        color: 'blue',
        clickEvent: {
          action: 'open_url',
          value: 'https://discord.gg/xdgCkUyaA4'
        }
      }
    ])
  }
}
