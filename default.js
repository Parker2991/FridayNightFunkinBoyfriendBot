
{
  module.exports = {
    
    bots: [
 {
      host: "server ip here or comment this out and refer to the bot.js file",
      version:"1.20.1",//version here
        reconnectDelay: 6000,
    username:username(),
             console:true,
        input: true,
      Core: {
        customName:"core custom name here",
         core: true,
              interval:180000
    },
     discord: {
        channelId: "discord channel ip here",
        invite: "discord invite link here",
        commandPrefix: "discord command prefix here"
      },
         selfcare: {
  vanished: true,
  unmuted: true,
  prefix: true,
  cspy: true,
  tptoggle:true,
  skin:true,
  gmc:true,
  op:true,
  nickname:true,
  username:true,
  god: true,
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
