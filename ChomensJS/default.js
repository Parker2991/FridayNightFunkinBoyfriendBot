module.exports = {
  version: '1.19.2',
  prefixes: [
    'default*',
    'defaultcbot ',
    '/defaultcbot '
  ],
  commandsDir: '../commands', // this will be used by the commands.js in the plugins folder so it needs ../
  keys: {
    normalKey: 'normal hash key here',
    ownerHashKey: 'OwnerHash™ key here'
  },
  proxy: {
    enabled: true,
    version: '1.19.2'
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
        text: 'ChomeNS ',
        color: 'yellow'
      },
      {
        text: 'Core',
        color: 'green'
      },
      {
        text: '\u2122',
        color: 'gold'
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
  reconnectTimeout: 1000 * 2,
  timeoutInterval: 1000 * 40,
  self_care_check_interval: 2000,
  discord: {
    prefix: 'default!',
    servers: {
      'localhost:25565': '696969696969696969'
    },
    embedsColors: {
      normal: '#FFFF00',
      error: '#FF0000'
    }
  },
  servers: [
    // logging means log to console
    {
      host: 'localhost',
      port: 25565,
      username: 'ChomeNS_Bot',
      kaboom: false,
      logging: true,
      useChat: false
    }
  ]
}
