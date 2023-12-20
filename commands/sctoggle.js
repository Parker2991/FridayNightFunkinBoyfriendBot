const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'sctoggle',
//<< this one line of code broke it lmao
   description:['selfcare toggle'],
        aliases:['selfcaretoggle'],
  trustLevel: 1,
  execute (context) {
    const bot = context.bot
    const source = context.source
    const args = context.arguments
          if (!args && !args[0] && !args[1] && !args[2]) return
    switch (args[1]) {
            case 'vanishon':
                    bot.visibility.on()
                    source.sendFeedback({text:'Vanish selfcare on', color:'green'})
                    break
                    case'vanishoff':
                  source.sendFeedback({text:'Vanish selfcare off', color:'red'})
                     bot.visibility.off()
                    
                    break
            case 'muteon':
                  source.sendFeedback({text:'Mute selfcare on', color:'green'})
                    bot.unmuted.on()
                    break
            case 'muteoff':
source.sendFeedback({text:'Mute selfcare off', color:'red'})
                    bot.unmuted.off()
break
            case 'tptoggleon':
                    bot.tptoggle.on()
                    source.sendFeedback({text:'Tptoggle on', color:'green'})
            break 
            case 'tptoggleoff':
                    bot.tptoggle.off()
                    source.sendFeedback({text:'Tptoggle off', color: 'red'})
                    break
            case 'godon':
                    bot.god.on()
                    source.sendFeedback({text:'God selfcare on', color: 'green'})
                    break
            case 'godoff':
                    bot.god.off()
                    source.sendFeedback({text:'Tptoggle off', color: 'red'})
                    break
            case 'prefixon': 
                    bot.prefix.on()
                    source.sendFeedback({text: 'Prefix selfcare on', color: 'green'})
                    break
            case 'prefixoff':
                    bot.prefix.off()
                    source.sendFeedback({text:'Prefix selfcare off', color:'red'})
                    break
            case 'usernameoff': 
                    bot.Username.off()
                    source.sendFeedback({text:'Username selfcare off', color: 'red'})
                 break
            case 'usernameon':
                    bot.Username.on()
                    source.sendFeedback({text:'Username selfcare on', color:'green'})
                    break
            case 'skinon':
                    bot.skin.on()
                    source.sendFeedback({text:'Skin selfcare on', color:'green'})
                    break
            case 'skinoff':
                    bot.skin.off() 
                    source.sendFeedback({text:'Skin selfcare off', color:'red'})
                    break
            case 'cspyon':
                    bot.cspy.on()
                    source.sendFeedback({text:'Cspy selfcare on', color:'green'})
                    break
            case 'cspyoff':
                    bot.cspy.off()
                    source.sendFeedback({text:'Cspy selfcare off', color:'red'})
                    break
            case 'nicknameon': 
                    bot.nickname.on()
                    source.sendFeedback({text:'Nickname selfcare on', color:'green'})
                    break
            case 'nicknameoff':
                    bot.nickname.off()
                           source.sendFeedback({text:'Nickname selfcare off', color:'red'})
                    break
                    
            default:
         source.sendFeedback({text:'Invalid argument',  color:'red'})
    source.sendFeedback({text:'the on arguments are vanishon, muteon, tptoggleon, godon, prefixon, usernameon, skinon, cspyon, nicknameon'})
                    source.sendFeedback({text:'the off arguments are vanishoff, muteoff, tptoggleoff, godoff, prefixoff, usernameoff, skinoff, cspyoff, nicknameoff'})
    }
    },

  }

//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace 

// Parker, why is hashing just random characters???
//wdym