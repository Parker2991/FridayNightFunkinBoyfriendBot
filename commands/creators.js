const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'creator',

  execute (context, prefix) {
    const message = context.arguments.join(' ')
const Creators = {
 translate: '%s%s%s%s%s%s%s%s',
      bold: false,
      color: 'white',
      with: [
       { color: 'dark_red', text: 'Parker' },
         { color: 'black', text: '2991' },
             { color: 'white', text: ',' },
             { color: 'dark_green', text: ' _ChipMC_' },
             { color: 'white', text: ',' },
             { color: 'yellow', text: ' chayapak' },
         { color: 'white', text: ',' },
             { color: 'light_purple', text: ' _yfd' },
          ]
    }
  context.source.sendFeedback(['Thank you to all that helped! ', Creators])
    context.source.sendFeedback(['ChomeNS Discord Server: https://discord.gg/xdgCkUyaA4'])
    context.source.sendFeedback(['FNFBoyfriendBot Discord Server: https://discord.gg/GCKtG4erux'])
    context.source.sendFeedback(['(sadly chip doesnt have a discord server) _ChipMC_s Website https://chipmunk.land'])
        context.source.sendFeedback(['_yfds discord server: https://discord.gg/BKYKBxfDrs'])
    context.source.sendFeedback(['Parker2991 discord username: parker2991'])
    context.source.sendFeedback(['chayapaks discord username: chayapak'])
    context.source.sendFeedback(['_ChipMC_s discord username: chipmunkmc'])
  }
}//https://discord.gg/GCKtG4erux
