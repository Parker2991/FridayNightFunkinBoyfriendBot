
{
  module.exports = {
    
    bots: [
{
      host: "",
  username:username(),
      version:"1.20.1",
      reconnectDelay: 6000,

      commands: {
        prefix: "~"
      },
      Core: {
        customName:"https://doin-your.mom"
  },
      discord: {
        channelId: "1106441703046529084",
        invite: "https://discord.gg/GCKtG4erux",
        commandPrefix: "~"
      }
    }, 

   {
    host: "mcslot.eu",
      version:"1.20.1",
        reconnectDelay: 6000,
    username:username(),
      commands: {
        prefix: "~"

      },
      Core: {
        customName:"https://doin-your.mom"
  },
         
     discord: {
        channelId: "1106393124110086174",
        invite: "https://discord.gg/GCKtG4erux",
        commandPrefix: "~"
      }
   },
    {
      host: "mc.opengamesllc.com",
      version:"1.20.1",
        reconnectDelay: 6000,
      username:username(),
      commands: {
        prefix: "~"

      },
      Core: {
        customName:"https://doin-your.mom"
    },

     discord: {
        channelId: "1167253115557400726",
        invite: "https://discord.gg/GCKtG4erux",
        commandPrefix: "~"
      }
    },
    {
      host: "168.100.232.7",
      version:"1.20.1",
        reconnectDelay: 6000,
      username:username(),
      commands: {
        prefix: "~"

      },
      Core: {
        customName:"https://doin-your.mom"
    },

     discord: {
        channelId: "1170167933687836732",
        invite: "https://discord.gg/GCKtG4erux",
        commandPrefix: "~"
      }
    },
    {
      host: "xd.tplinkdns.com",
      version:"1.20.1",
        reconnectDelay: 6000,
      username:username(),
      commands: {
        prefix: "~"

      },
      Core: {
        customName:"https://doin-your.mom"
    },

     discord: {
        channelId: "1170401078811037757",
        invite: "https://discord.gg/GCKtG4erux",
        commandPrefix: "~"
      }
    }
  ]
}
    
  


  
          function username() {
              const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'; // remove sus characters like ` or like ( or whatever because it breaks whatever
              let username = '';
              for (let i = 0; i < 8; i++) {
                  const randomIndex = Math.floor(Math.random() * characters.length);
                  username += characters[randomIndex];
              }
              return username;
          }
}