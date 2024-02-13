const randomstring = require('randomstring')
module.exports = {
  version: '1.19.2',
  prefixes: [
    '3*',
    'cbot3 ',
    '/cbot3 '
  ],
  commandsDir: '../commands', // this will be used by the commands.js in the plugins folder so it needs ../
  proxy: {
    enabled: false,
    version: '1.10'
  },
  console: true,
  chat: {
    messageLength: 100
  },
  core: {
    layers: 3,
    refillInterval: 1000 * 60,
  
    customName: [
      {
        text: 'https://doin-your.mom',
        color: 'dark_red'
      }
      
    ]
  },
  self_care: {
    prefix: true,
    op: true,
    cspy: true,
    vanish: true,
    nickname: true,
    socialspy: true,
    gamemode: true,
    mute: true,
    endCredits: true
  },
  eval: {
    serverUrl: 'http://localhost:4445/'
  },
  reconnectTimeout: 15000, // idk mabe
  timeoutInterval: 1000 * 40,
  self_care_check_interval: 2000,
  discord: {
    prefix: '!',
    servers: {
     
     
      'mc.opengamesllc.com:25565': '1152807355000565871',
      'kaboom.pw:25565': '1152807462836109402',
      '168.100.232.7:25565':'1155838188586283109',
    },
    embedsColors: {
      normal: '#FFFF00',
      error: '#FF0000'
    }
  },
  servers: [
    // logging means log to console
   

     {
      host: 'mc.opengamesllc.com',
      port: 25565,
      username: randomstring.generate(8),
      kaboom: true,
      logging: true,
      useChat: false
    },
    {
      host: '168.100.232.7',
      port: 25565,
      username: randomstring.generate(8),
      kaboom: true,
      logging: true,
      useChat: false
    },
    
    {
      host: 'kaboom.pw',
      port: 25565,
      username: randomstring.generate(8),
      kaboom: true,
      logging: true,
      useChat: false
    },
    
  ]
}
