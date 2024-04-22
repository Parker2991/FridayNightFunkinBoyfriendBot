{
  module.exports = {
Commands:{
  prefixes:['!'], //since the prefix array doesnt have a set number any number of  prefixes can be set
  colors: { 
   discord: {
   error: "#ff0000",
   embed: "#00ffff",
  },
  help:{
   pub_lickColor: "#00FFFF",
   t_rustedColor: "dark_purple",
   own_herColor: "dark_red",
  },
  error: "#FF0000",
 }  
},
Core: {
JSON: ``, //PLEASE make this a valid json or the bot will not be able to refill its core
area: {
  start: { x: 0, y: 0, z: 0 },
  end: { x: 15, y: 0, z: 15 },
 }
},
validation: {
 discord: {
  roles: {
  trusted: "trusted",
  owner: "owner",
  },
  channelId: "channel validation here",
 },
 keys: {
  trustedKey: "trusted key here",
  ownerKey: "owner key here",
 }
},
tellrawTag: {
 fnftellraw: { text: "FNF", color: "dark_purple" },
 boyfriendtellraw: { text: "Boyfriend", color: "#00FFFF" },
 bottellraw: { text: "Bot", color: "dark_red" },
},
helpTheme:{
 pub_lickColor: "#00FFFF",
 t_rustedColor: "dark_purple",
 own_herColor: "dark_red",
},
Discord: {
 enabled: false,
 invite: "https://discord.gg/GCKtG4erux",
 commandPrefix: "!",
 presence:{
  name: 'amongus', //set status text here
  type: 4,
  status: 'online', //status here
 }
},    
console:{
 filelogging: false,
 prefix: 'c.',
},
    bots: [
 {
   host: "localhost",
   useChat: false,
   isKaboom: true,
   isCreayun: false,
   usernameGen: true,
   username: username(),
   version: "1.20.2",
   serverName: 'localhost',
   reconnectDelay: 6000,
   endcredits:false,
   Console:{ 
    enabled: false,
    ratelimit: 25,
   },    
   Core: {
    enabled: true,
    interval:180000
   },
   discord: {
    channelId: "",//discord channel id here
    log: false,
   },
   matrix:{
    roomId: '', //matrix room id here
   },
   selfcare: {
    vanished: true,
    unmuted: true,
    prefix: true,
    cspy: true,
    tptoggle: true,
    skin: true,
    gmc: true,
    op: true,
    nickname: true,
    username: true,
    god: true,
    interval: 500,
   }
 },
  ]
 }
 
 function username() {
              const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890\\!@#$%^*(){}[]|\;:,<.>/?§';
              let username = '';
              for (let i = 0; i < 9; i++) {
                  const randomIndex = Math.floor(Math.random() * characters.length);
                  username += characters[randomIndex];
              }
              return username;
          }
 }
