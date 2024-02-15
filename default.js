
{
  module.exports = {
    
    bots: [
{
   host: "serveriphere",
  username:username(),
      version:"1.20.2",
      reconnectDelay: 6000,
endcredits:false,
        Console:{
          enabled: false,
                filelogging:false,
prefix:'c.',
        },
       
       
       commands: { 
                     prefixes: 
                             ["!", "!", "!"] // are those the prefixes?
             },
      Core: {
        customName:"corenamehere",
        enabled: false,
              interval:180000
  },
      discord: {
        channelId: "discordchannelidhere",
        invite: "discordinvitelinkhere",
        commandPrefix: "!"
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
