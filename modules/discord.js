// TODO: Maybe move client creation elsewhere
const { escapeMarkdown } = require('../util/escapeMarkdown')
const { Client, GatewayIntentBits } = require('discord.js')
const { MessageContent, GuildMessages, Guilds } = GatewayIntentBits

const CommandSource = require('../CommandModules/command_source')

const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] })
const util = require('util')
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

  client.on('ready', (context) => {
    bot.discord.channel = client.channels.cache.get(options.discord.channelId)
    bot.discord.channel.send(`\`\`\`\nStarting ${process.env["buildstring"]}......\n\`\`\``)
    bot.discord.channel.send(`\`\`\`\nFoundation: ${process.env["FoundationBuildString"]}\n\`\`\``)
 bot.discord.channel.send(`\`\`\`\nSuccessfully logged into discord as ${bot.discord.client.user.username}#${bot.discord.client.user.discriminator}\n\`\`\``)
    bot.console.info(`Successfully logged into discord as ${bot.discord.client.user.username}#${bot.discord.client.user.discriminator}`)
  })

  // I feel like this is a modified version of ChomeNS Bot's discord plugin (the js one ofc) lol - chayapak

  let discordQueue = []
  setInterval(() => {
    if (discordQueue.length === 0) return
    try {
      bot.discord.channel.send(`\`\`\`ansi\n${discordQueue.join('\n').substring(0, 1984)}\n\`\`\``)
    } catch (error) {
      //ansi real 
      bot.console.error(error.stack)
    
    }//im pretty sure the discord code is as old as the discord relay prototypes lmao
    //sus
    discordQueue = []
  }, 2000)
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
    discordQueue.push(message)
  }
    
  /*
   const cleanMessage = escapeMarkdown(message.toAnsi(), true)
    const discordMsg = cleanMessage
      .replaceAll('@', '@\u200b')
      .replaceAll('http', 'http\u200b')
      .replaceAll('\u001b[9', '\u001b[3')
      */
 //`\`\`\`\n \n\`\`\`
  function sendComponent (message) {
    const lang = require(`../util/language/${bot.options.language}.json`)
 const ansi = bot.getMessageAsPrismarine(message).toAnsi(lang).replaceAll('```\u001b[9```' + '```\u001b[3```')// I have a function to fix ansi :shrug:
       
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

 
    const now = new Date().toLocaleString("en-US",{timeZone:"America/CHICAGO"})//real
    try {
         sendDiscordMessage(fixansi(ansi.replaceAll('`', '`\u200b')))
  //'```ansi\n' + fixansi(ansi.replaceAll('\u200b').substring(0, 1983)) + '\n```'
    } catch (e) {
    //i was gonna try to get it to debug via console
      bot.console.error(`Error sending a message to Discord:\n${e.message}`)
      sendDiscordMessage(e.message)
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
//
    if (message.content.startsWith(bot.discord.commandPrefix)) { // TODO: Don't hardcode this
      const source = new CommandSource({ profile: { name: message?.member?.displayName } }, { discord: true, console: false }, false, message)
            
      source.sendFeedback = message => {
        sendComponent(message)
         console.log(message.content)
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
        { text: message?.member?.displayName },
        message.content
      ]
    })
   
  }
        
  client.on('messageCreate', messageCreate)
bot.on('error', (error, reason, data) => {
  
       sendDiscordMessage(`Disconnected: ${error.stack}`)
        
//sendDiscordMessage(reason)
  
  })
      
 /*bot.on('end', (reason, event) => {
sendDiscordMessage('event:' + event)
         sendDiscordMessage('Reason:' + util.inspect(reason))
         
 })*/
  //client.on('end', reason => { bot.emit('end', reason)
//client.on('keep_alive', ({ keepAliveId }) => {
    //bot.emit('keep_alive', { keepAliveId })

  /* bot.console.info(
        `Disconnected from ${bot.server.host} (${event} event): ${util.inspect(reason)}`
    )
    channel.send(`Disconnected: \`${util.inspect(reason)}\``)
*/
function fixansi(message) {
  const ansilist = {
    "\x1B\[93m": "\x1B[33m", // Yellow
    "\x1B\[96m": "\x1B[36m", // Blue
    "\x1B\[94m": "\x1B[34m", // Discord Blue
    "\x1B\[90m": "\x1B[30m", // Gray
    "\x1B\[91m": "\x1B[31m", // Light Red
    "\x1B\[95m": "\x1B\[35m", // Pink
    "\x1B\[92m": "\x1B\[32m", // Green
    "\x1B\[0m": "\x1B\[0m\x1B\[37m", // White
    "\x1B\[97m": "\x1B\[0m\x1B\[37m", // White
  }; 
  let i = message;

  for (const ansi in ansilist) {
    if (ansilist.hasOwnProperty(ansi)) {
      i = i.replace(new RegExp(escapeRegExpChars(ansi), 'g'), ansilist[ansi]);

      function escapeRegExpChars(text) {
        return text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }
    }
  }

  return i;
}
}
//
module.exports = inject
