const matrix = require('matrix-js-sdk')
const CommandSource = require('../CommandModules/command_source')
const htmlStringify = require('../util/html.js')
const client = matrix.createClient({
    baseUrl: "https://matrix.chipmunk.land",
    accessToken: process.env["matrixtoken"],
    userId:'@fnfboyfriendbot:chipmunk.land',
})
function inject (bot, options) {
  if (!bot.matrix?.enabled) return

  bot.matrix = {
//    client: options.matrix.client ?? matrix.createClient(client),
//client:options.matrix.client ?? matrix.createClient({baseUrl: "https://matrix.chipmunk.land:", accessToken: process.env["matrixtoken"], userId:'@fnfboyfriendbot:chipmunk.land'}), 
  client,
    roomId: options.matrix.roomId,
    commandPrefix: options.matrix.commandPrefix || undefined,
    inviteUrl: String(options.matrix.inviteUrl) || undefined
  }

  const startTime = Date.now()
// bot.on('chat_html', async html => {
  //  sendMessage(html)
  //})
bot.on('message', message => {
    const html = htmlStringify(message, { lang: bot.registry.language ?? {} })
sendMessage(html)
})
  const matrixPrefix = {
    text: 'Matrix',
    hoverEvent: {
      action: 'show_text',
      contents: 'Click to copy the invite link for the Matrix space to your clipboard!'
    },
    clickEvent: {
      action: 'copy_to_clipboard', // * Minecraft, and Java's URI class in general, seem to hate `#`, so open_url does not work.
      value: 'amogus'//bot.matrix.inviteUrl
    }
  }

  bot.matrix.client.on('Room.timeline', (event, room, toStartOfTimeline) => {

if (event.getRoomId() !== bot.matrix.roomId || event.getType() !== 'm.room.message' || event.getTs() < startTime || event.sender.userId === bot.matrix.client.getUserId()) return

    const content = event.getContent()
    const permissionLevel = event.sender.powerLevelNorm
    let message = content.body

    const senderText = {
      text: event.sender.rawDisplayName || event.sender.name || event.sender.userId,
      hoverEvent: {
        action: 'show_text',
        contents: [toString(event.sender.userId), '\nPermission Level: ', toString(permissionLevel), '\n\nClick to copy the User ID']
      },
      clickEvent: {
        action: 'copy_to_clipboard',
        value: toString(event.sender.userId)
      }
    }

    if (content.url) {
      message = {
        text: '[Attachment]',
//        ...bot.styles.primary,
        clickEvent: {
          action: 'open_url',
          value: bot.matrix.client.mxcUrlToHttp(content.url)
        }
      }
    } else if (message.startsWith('!')) {
      const source = new CommandSource({ console:false,discord:false,matrix:true })
      bot.commandManager.execute(message.substring('!'), source)
bot.sendFeedback = message => {       
 sendCompoent(message)
         //console.log(message.content)
//bot.discord.Message = this
    }

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
              text: 'Matrix',
              bold: false,
              color: '#0dbd8b'
            }
          ],
          clickEvent: bot.matrix.inviteUrl ? { action: 'open_url', value: bot.matrix.inviteUrl } : undefined,
          hoverEvent: { action: 'show_text', contents: 'Click to join the matrix' }
        },
        { text: event.sender.rawDisplayName || event.sender.name || event.sender.userId },
        message
      ]
    })
//    bot.fancyMsg(matrixPrefix, senderText, message)
  })

  let dequeuingMessages = false
  let queue = []
  async function sendMessage (html) {
    queue.push(html)
    if (dequeuingMessages) return

    dequeuingMessages = true
    while (queue.length !== 0) {
      const html = queue.join('<br>')
      queue = []
      await _sendMessage(html)
    }
    dequeuingMessages = false
  }

  async function _sendMessage (html) {
    const content = {
      msgtype: 'm.text',
      format: 'org.matrix.custom.html',
      body: html,
      formatted_body: html,
      'm.mentions': {}
    }

try{    
      await bot.matrix.client.sendEvent(bot.matrix.roomId, `m.room.message`, content)
    } catch (error) {
      console.error('Unable to send Matrix message:', error)
    }
  }

  function sendFeedback (message, sendFeedback) {
   // const html = bot.getMessageAsPrismarine(text, { lang: bot.registry.language })?.toAnsi()
const html = htmlStringify(message, { lang: bot.registry.language ?? {} })
sendMessage(html)
  }
}

module.exports = inject