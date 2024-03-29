{
  module.exports = {
    Commands:{
prefixes:['!'] 
//since the prefix array doesnt have a set number more prefixes can be set
},
Core:{

JSON:``,//needs to be a valid json
area:{
start:{ x: 0, y: 0, z: 0 },
end:{ x: 15, y: 0, z: 15 },
}
},

tellrawTag:{
fnftellraw:{text:"FNF",color:"dark_purple"},
boyfriendtellraw:{text:"Boyfriend",color:"#00FFFF"},
bottellraw:{text:"Bot",color:"dark_red"},
},
helpTheme:{
pub_lickColor:"#00FFFF",
t_rustedColor:"dark_purple",
own_herColor:"dark_red",
},
Discord: {
enabled:false,
 invite: "https://discord.gg/GCKtG4erux",
   commandPrefix: "!",
presence:{
 name:'', //set status text here
  type:4,
   status:'dnd',//status here
}
},    
console:{
filelogging:false,
prefix:'c.',
},
    bots: [
{
   host: "localhost",
  username:username(),
      version:"1.20.2",
serverName:'localhost',
   reconnectDelay: 6000,
   endcredits:false,
   Console:{ 
  enabled:false,     
  ratelimit:10,
},
       
     Core: {
     enabled: true,
      interval:180000
         },
      discord: {
        channelId: "",//discord channel id here
},
matrix:{
roomId:'',//matrix room id here
},
  selfcare: {
  vanished: false,
  unmuted: false,
  prefix: false,
  cspy: false,
  tptoggle:false,
  skin:false,
  gmc:false,
  op:false,
  nickname:false,
  username:false,
  god: false,
  interval:500,
}
    }, 
      
  ]
}
    
  


  
          function username() {
              const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'; // remove sus characters like ` or like ( or whatever because it breaks whatever
              let username = '';
              for (let i = 0; i < 9; i++) {
                  const randomIndex = Math.floor(Math.random() * characters.length);
                  username += characters[randomIndex];
              }
              return username;
          }
}
