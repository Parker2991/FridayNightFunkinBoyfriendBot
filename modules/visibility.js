function selfcaretoggle (bot, options, context) {
bot.visibility = {
        on ()  {
            enabled = true   
                bot.options.selfcare.vanished = true
        },
        off () {
               enabled = false
                bot.options.selfcare.vanished = false
                bot.command('v off')
        }
},
        bot.unmuted = {
                on () {
                        enabled = true
                        bot.options.selfcare.unmuted = true
                        bot.core.run(`mute ${bot.uuid}`)
                      
                },
                off () {
                        enabled = false
                        bot.options.selfcare.unmuted = false
                }
        },
        bot.tptoggle = {
                on () {
                bot.options.selfcare.tptoggle = false
                        bot.command('tptoggle on')
                },
                off () {
                        bot.options.selfcare.tptoggle = true
                        bot.command('tptoggle off')
                }
        },
        bot.god = {
                on () {
                        bot.options.selfcare.god = true
                        
                },
                off () {
                        bot.options.selfcare.god = false
                        bot.command('god off')
                }
        },
        bot.prefix = {
                on () {
                        bot.options.selfcare.prefix = true
                }, 
                off () {
                        bot.options.selfcare.prefix = false
                }
        },
        bot.Username = {
                on () {
                        bot.options.selfcare.username = true
                }, 
                off () {
                        bot.options.selfcare.username = false
                }
        },
        bot.skin = {
                on () {
                        bot.options.selfcare.skin = true
                }, 
                off () {
                        bot.options.selfcare.skin = false
                }
        },
        bot.cspy = {
                on () {
                        bot.options.selfcare.cspy = true
                },
                off () {
                        bot.options.selfcare.cspy = false
                }
        },
        bot.nickname = {
                on () {
                        bot.options.selfcare.nickname = true
                },
                off () {
                        bot.options.selfcare.nickname = false
                }
        }
        
    

        
}
module.exports = selfcaretoggle