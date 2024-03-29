const CommandError = require('../CommandModules/command_error.js')
module.exports = {
  name: 'sctoggle',
   description:['toggle the selfcare'],
        aliases:['selfcaretoggle'],
       trustLevel: 1,
usage:["vanish","mute","god","tptoggle","nickname","username","cspy","skin","gmc","op","prefix","on/off/true/false"],
  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
const source = context.source
const args = context.arguments
    if (!args && !args[0] && !args[1] && !args[2] && !args[3]) return
switch (args[1]) {
case 'vanish':
if (args[2] === 'false' || args[2] === 'off'){
source.sendFeedback([{text:'Vanish is ',color:'dark_gray'},{text:'Disabled',color:'dark_red'}])
bot.options.selfcare.vanished = false
bot.command('essentials:vanish off')
return
}else if (args[2] === 'true' || args[2] === 'on'){
source.sendFeedback([{text:'Vanish is ',color:'dark_gray'},{text:'Enabled',color:'dark_green'}])
bot.options.selfcare.vanished = true
bot.command('essentials:vanish on')
return
}else if (args[2] !== 'true' ?? 'false' ?? 'off' ?? 'on'){
throw new CommandError({text:'Invalid argument! the arguments are true false off on',color:'dark_red'})
return
}
break 
case 'mute':
if (args[2] === 'false' || args[2] === 'off'){
source.sendFeedback([{text:'Mute selfcare is ',color:'dark_gray'},{text:'Disabled',color:'dark_red'}])
bot.options.selfcare.unmuted = false
return
}
if (args[2] === 'true' || args[2] === 'on'){
source.sendFeedback([{text:'Mute selfcare is ',color:'dark_gray'},{text:'Disabled',color:'dark_red'}])
bot.options.selfcare.unmuted = true

return
}else if (args[2] !== 'true' ?? 'false' ?? 'off' ?? 'on'){
throw new CommandError({text:'Invalid argument! the arguments are true false on off'})
return
}
break
case 'prefix':
if (args[2] === 'false' || args[2] === 'off'){
source.sendFeedback([{text:'Prefix selfcare is ',color:'dark_gray'},{text:'Disabled',color:'dark_red'}])
bot.options.selfcare.prefix = false
return
}
if (args[2] === 'true' || args[2] === 'on'){
source.sendFeedback([{text:'Prefix selfcare is now ',color:'dark_gray'},{text:'Enabled',color:'dark_green'}])
bot.options.selfcare.prefix = true
return
}
else if (args[2] !== 'true' ?? 'false' ?? 'off' ?? 'on'){
throw new CommandError({text:'Invalid argument! the arguments are true false on off'})
return

}
break
case 'cspy':
if (args[2] === 'false' || args[2] === 'off'){
source.sendFeedback([{text:'cspy selfcare is ',color:'dark_gray'},{text:'Disabled',color:'dark_red'}])
bot.options.selfcare.cspy = false
return
}
if (args[2] === 'true' || args[2] === 'on'){
source.sendFeedback([{text:'cspy selfcare is now ',color:'dark_gray'},{text:'Enabled',color:'dark_green'}])
bot.options.selfcare.cspy = true
return
}
else if (args[2] !== 'true' ?? 'false' ?? 'off' ?? 'on'){
throw new CommandError({text:'Invalid argument! the arguments are true false on off'})
return
}
break
case 'tptoggle':
if (args[2] === 'false' || args[2] === 'off'){
source.sendFeedback([{text:'Tptoggle selfcare is ',color:'dark_gray'},{text:'Disabled',color:'dark_red'}])
bot.options.selfcare.tptoggle = false
return
}
if (args[2] === 'true' || args[2] === 'on'){
source.sendFeedback([{text:'Tptoggle selfcare is now ',color:'dark_gray'},{text:'Enabled',color:'dark_green'}])
bot.options.selfcare.tptoggle = true
return
}
else if (args[2] !== 'true' ?? 'false' ?? 'off' ?? 'on'){
throw new CommandError({text:'Invalid argument! the arguments are true false on off'})
return

}
break
case 'skin':
if (args[2] === 'false' || args[2] === 'off'){
source.sendFeedback([{text:'Skin selfcare is ',color:'dark_gray'},{text:'Disabled',color:'dark_red'}])
bot.options.selfcare.skin.enabled = false
return
}
if (args[2] === 'true' || args[2] === 'on'){
source.sendFeedback([{text:'Skin selfcare is now ',color:'dark_gray'},{text:'Enabled',color:'dark_green'}])
bot.options.selfcare.skin.enabled = true
return
}
else if (args[2] !== 'true' ?? 'false' ?? 'off' ?? 'on'){
throw new CommandError({text:'Invalid argument! the arguments are true false on off'})
return

}
break
case 'gmc':
if (args[2] === 'false' || args[2] === 'off'){
source.sendFeedback([{text:'gmc selfcare is ',color:'dark_gray'},{text:'Disabled',color:'dark_red'}])
bot.options.selfcare.gmc = false
return
}
if (args[2] === 'true' || args[2] === 'on'){
source.sendFeedback([{text:'gmc selfcare is now ',color:'dark_gray'},{text:'Enabled',color:'dark_green'}])
bot.options.selfcare.gmc = true
return
}
else if (args[2] !== 'true' ?? 'false' ?? 'off' ?? 'on'){
throw new CommandError({text:'Invalid argument! the arguments are true false on off'})
return

}
break
case 'op':
if (args[2] === 'false' || args[2] === 'off'){
source.sendFeedback([{text:'op selfcare is ',color:'dark_gray'},{text:'Disabled',color:'dark_red'}])
bot.options.selfcare.op = false
return
}
if (args[2] === 'true' || args[2] === 'on'){
source.sendFeedback([{text:'op selfcare is now ',color:'dark_gray'},{text:'Enabled',color:'dark_green'}])
bot.options.selfcare.op = true
return
}
else if (args[2] !== 'true' ?? 'false' ?? 'off' ?? 'on'){
throw new CommandError({text:'Invalid argument! the arguments are true false on off'})
return

}
break
case 'nickname':
if (args[2] === 'false' || args[2] === 'off'){
source.sendFeedback([{text:'nickname selfcare is ',color:'dark_gray'},{text:'Disabled',color:'dark_red'}])
bot.options.selfcare.nickname = false
return
}
if (args[2] === 'true' || args[2] === 'on'){
source.sendFeedback([{text:'nickname selfcare is now ',color:'dark_gray'},{text:'Enabled',color:'dark_green'}])
bot.options.selfcare.nickname = true
return
}
else if (args[2] !== 'true' ?? 'false' ?? 'off' ?? 'on'){
throw new CommandError({text:'Invalid argument! the arguments are true false on off'})
return

}
break
case 'username':
if (args[2] === 'false' || args[2] === 'off'){
source.sendFeedback([{text:'username selfcare is ',color:'dark_gray'},{text:'Disabled',color:'dark_red'}])
bot.options.selfcare.username = false
return
}
if (args[2] === 'true' || args[2] === 'on'){
source.sendFeedback([{text:'username selfcare is now ',color:'dark_gray'},{text:'Enabled',color:'dark_green'}])
bot.options.selfcare.username = true
return
}
else if (args[2] !== 'true' ?? 'false' ?? 'off' ?? 'on'){
throw new CommandError({text:'Invalid argument! the arguments are true false on off'})
return

}
break
case 'god':
if (args[2] === 'false' || args[2] === 'off'){
source.sendFeedback([{text:'god selfcare is ',color:'dark_gray'},{text:'Disabled',color:'dark_red'}])
bot.options.selfcare.god = false
return
}
if (args[2] === 'true' || args[2] === 'on'){
source.sendFeedback([{text:'god selfcare is now ',color:'dark_gray'},{text:'Enabled',color:'dark_green'}])
bot.options.selfcare.god = true
return
}
else if (args[2] !== 'true' ?? 'false' ?? 'off' ?? 'on'){
throw new CommandError({text:'Invalid argument! the arguments are true false on off'})
return

}
break
default: 
source.sendFeedback({text:'Invalid argument!',color:'dark_red'})
source.sendFeedback({text:'vanish mute prefix cspy skin sctoggle gmc op nickname username god',color:'dark_green'})
}
}
}
