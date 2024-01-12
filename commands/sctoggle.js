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
                    bot.options.selfcare.vanished = true
                    source.sendFeedback({text:'Vanish selfcare on', color:'green'})
                    break
                    case'vanishoff':
                  source.sendFeedback({text:'Vanish selfcare off', color:'red'})
                    bot.options.selfcare.vanished = false
                    bot.command('vanish off')
                    
                    break
            case 'muteon':
                  source.sendFeedback({text:'Mute selfcare on', color:'green'})
                     bot.options.selfcare.unmuted = true
                    break
            case 'muteoff':
source.sendFeedback({text:'Mute selfcare off', color:'red'})
                    bot.options.selfcare.unmuted = false
break
            case 'tptoggleon':
                   bot.options.selfcare.tptoggle = false
                    bot.command('tptoggle on')
                    source.sendFeedback({text:'Tptoggle on', color:'red'})
            break 
            case 'tptoggleoff':
                     bot.options.selfcare.tptoggle = true
                    
                    source.sendFeedback({text:'Tptoggle off', color: 'green'})
                    break
            case 'godon':
                   bot.options.selfcare.god = true
                    source.sendFeedback({text:'God selfcare on', color: 'green'})
                    break
            case 'godoff':
                    bot.options.selfcare.god= false
                    source.sendFeedback({text:'Tptoggle off', color: 'red'})
                    break
            case 'prefixon': 
                    bot.options.selfcare.prefix = true
                    source.sendFeedback({text: 'Prefix selfcare on', color: 'green'})
                    break
            case 'prefixoff':
                     bot.options.selfcare.prefix = false
                    source.sendFeedback({text:'Prefix selfcare off', color:'red'})
                    break
            case 'usernameoff': 
               bot.options.selfcare.username = false
                    source.sendFeedback({text:'Username selfcare off', color: 'red'})
                 break
            case 'usernameon':
                  bot.options.selfcare.username = true
                    source.sendFeedback({text:'Username selfcare on', color:'green'})
                    break
            case 'skinon':
                    bot.options.selfcare.skin = true
                    source.sendFeedback({text:'Skin selfcare on', color:'green'})
                    break
            case 'skinoff':
                     bot.options.selfcare.skin = false 
                    source.sendFeedback({text:'Skin selfcare off', color:'red'})
                    break
            case 'cspyon':
                     bot.options.selfcare.cspy = true
                    source.sendFeedback({text:'Cspy selfcare on', color:'green'})
                    break
            case 'cspyoff':
                     bot.options.selfcare.cspy = false
                    source.sendFeedback({text:'Cspy selfcare off', color:'red'})
                    break
            case 'nicknameon': 
                     bot.options.selfcare.nickname= true
                    source.sendFeedback({text:'Nickname selfcare on', color:'green'})
                    break
            case 'nicknameoff':
                    bot.options.selfcare.nickname = false
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