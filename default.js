
{
  module.exports = {
    
    bots: [
{
   host: "localhost",
  username:username(),
      version:"1.20.1",
      reconnectDelay: 6000,
language:"lolus",
        console:true,
        input: true,
      commands: {
        MainPrefix: "set Main Prefix here",
              SecondaryPrefix:'set Secondary prefix here',
              TertiaryPrefix:'set Tertiary Prefix here'
      },
      Core: {
        customName:"core customName here",
         core: true,
  },
      discord: {
        channelId: "discord channelId here",
        invite: "discord invite link here",
        commandPrefix: "discord command prefix here"
      },
  skin: {
    torso:{
      jacket:true,
      cape:true,
    },
    arms: {
      leftSleeve:true,
      rightSleeve:true,
    },
    legs:{
      leftPants:true,
      rightPants:true,
    },
    head:{
      hat:true
    },
  },
   selfcare: {
     unmuted: true,
     vanished: true,
     prefix: true,
     skin: true,
  cspy: true,
     op: true,
     gmc: true,
     username:true,
     nickname: true,
     god:true,
     tptoggle: true,
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
