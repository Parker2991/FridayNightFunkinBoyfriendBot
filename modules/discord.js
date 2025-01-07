// TODO: Maybe move client creation elsewhere
const { escapeMarkdown } = require('../util/escapeMarkdown')
const { Client, GatewayIntentBits } = require('discord.js')
const { MessageContent, GuildMessages, Guilds } = GatewayIntentBits

const CommandSource = require('../CommandModules/command_source')

const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] })

client.login(process.env.discordtoken)

function inject (bot, options) {
  if (!options.discord?.channelId) {
    bot.discord = { invite: options.discord?.invite }
    return
  }

  bot.discord = {
    client,
    channel: undefined,
    invite: options.discord.invite || undefined,
    commandPrefix: options.discord.commandPrefix
  }

  client.on('ready', () => {
    bot.discord.channel = client.channels.cache.get(options.discord.channelId)
  
  })

  // I feel like this is a modified version of ChomeNS Bot's discord plugin (the js one ofc) lol - chayapak

  let discordQueue = '' // too lazy to make an array mabe
  setInterval(async () => {
    if (discordQueue === '') return
    try {
      await bot.discord.channel.send(discordQueue.substring(0, 2000))
    } catch (error) {
      console.error(error)
    }
    //sus
    discordQueue = ''
  }, 1000)
//const ansi = bot.getMessageAsPrismarine(message).toAnsi(lang).replaceAll('``\`\`\u200b\ansi\n\`\`\u001b[9', '\u001b[3\n`\`\`')
  /* bot.on('message', (message) => {
    const cleanMessage = escapeMarkdown(message.toAnsi(), true)
    const discordMsg = cleanMessage
      .replaceAll('@', '@\u200b')
      .replaceAll('http', 'http\u200b')
      .replaceAll('\u001b[9', '\u001b[3')
   
    queue += '\n' + discordMsg
  })
  */
  
  function sendDiscordMessage (message) {
    discordQueue += message + '\n'
  }
 
  /*
   const cleanMessage = escapeMarkdown(message.toAnsi(), true)
    const discordMsg = cleanMessage
      .replaceAll('@', '@\u200b')
      .replaceAll('http', 'http\u200b')
      .replaceAll('\u001b[9', '\u001b[3')
      */
  function sendComponent (message) {
    const lang = require('../lolus.json')
    const ansi = bot.getMessageAsPrismarine(message).toAnsi().replaceAll('```\u001b[9```' + '```\u001b[3```')
       
    /*
      would it be better to do
      ```
      message1
      message2
      message3...
      ```
        and not
         ```
      message1
      ```
      ````
      message2
      ````
      ````
      message3...
      ```
    */

    
    const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})
    try {
      sendDiscordMessage('```ansi\n' + ansi.replaceAll('\u200b`').substring(0, 2000) + '\n```')
  
    } catch (e) {
    //i was gonna try to get it to debug via console
      console.error(`Error sending a message to Discord:\n${e.message}`)
//already tried ansi
    }//send isnt defined
  } // its still doing the ansi crap
    //;/
//wait a min it shows smh about unable to read properties of undefined (reading 'send') in the console or smh on startup
// its the messages it sending read lines 69 to 86
  // i see
  bot.on('message', message => {
    sendComponent(message)
  })

  function messageCreate (message) {
    if (message.author.id === bot.discord.client.user.id) return

    if (message.channel.id !== bot.discord.channel.id) return

    if (message.content.startsWith(bot.discord.commandPrefix)) { // TODO: Don't hardcode this
      const source = new CommandSource({ profile: { name: message.member.displayName } }, { discord: true, console: false }, false, message)
      source.sendFeedback = message => {
        sendComponent(message)
      }

      bot.commandManager.executeString(source, message.content.substring(bot.discord.commandPrefix.length))
      return
    }

    bot.tellraw({
      translate: '[%s] %s \u203a %s',
      with: [
        {
          translate: '%s%s%s %s',
          bold:false,
          with: [
            {
              text: 'FNF',
              bold: false,
              color: 'dark_purple'
            },
            {
              text: 'Boyfriend',
              bold: false,
              color: 'aqua'
            },
            {
              text: 'Bot',
              bold: false,
              color: 'dark_red'
            },

            {
              text: 'Discord',
              bold: false,
              color: 'blue'
            }
          ],
          clickEvent: bot.discord.invite ? { action: 'open_url', value: bot.discord.invite } : undefined,
          hoverEvent: { action: 'show_text', contents: 'Click to join the discord' }
        },
        { text: message.member.displayName },
        message.content
      ]
    })
  }
  client.on('messageCreate', messageCreate)
bot.on('end', (error) => {
    
    sendDiscordMessage(`\`\`\`ansi\nDisconnected: ${'error', console.error}\n\`\`\``)

  })
  
}
//
module.exports = inject
