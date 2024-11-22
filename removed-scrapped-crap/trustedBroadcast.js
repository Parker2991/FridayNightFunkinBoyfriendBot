const trustedPlayers = require('../data/trustedPlayers.json');
module.exports = (bot, options, config) => {
  let component;
  trustedPlayers.map((trusted) => {
    /*component.push({
      translate: "%s",
      color: config.colors.commands.tertiary,
      with: [
        { text: "ea" }
      ]
    })*/
    bot.on('message', (data) => {
      try {
      let stringMessage = bot.getMessageAsPrismarine(data)?.toString();
//      console.log(JSON.stringify(data))
//      console.log(data?.with[0]?.clickEvent);
//      console.log(data.color);
//      for (const players of bot.players) {
      if (
/*
        stringMessage.startsWith(`${trusted.player}`) &&
        data.translate === "multiplayer.player.joined" &&
        data.color === "yellow" &&
        data.with.insertion === `${trusted.player}` &&
        data?.with[0]?.clickEvent === `{action:'suggest_command',value:'/tell ${trusted.player} '}` &&*/
        JSON.stringify(data) ===
          JSON.stringify({
            color:'yellow',
            translate:'multiplayer.player.joined',
            with:[{insertion:`${trusted.player}`,
              clickEvent:{
                action:'suggest_command',
                value:`/tell ${trusted.player} `
              },
              hoverEvent:{
                action:'show_entity',
                contents:{
                  type:'minecraft:player',
                  id:`${bot.players.find((player) => player.profile.name === trusted.player)?.uuid}`,
                  name:{
                    text:`${trusted.player}`
                  }
                }
              },
              text:`${trusted.player}`
            }]
          })
      ) {
       if (bot.players.map((e) => { e.profile.name === trusted.player })) {
         bot.tellraw(`@a[name="${trusted.player}"]`, "e");
         component = "e";
       }
      }
//      bot.tellraw(`@a[name="${bot.players.find((player) => player.profile.name === trusted.player).profile.name}"]`, component);
/*        for (const players of bot.players) {
//           console.log(players);
          if (players.profile.name === trusted.player) {
            let e = players.profile.name === trusted.player;
            for (const eachBot of bot.bots) {
              eachBot.tellraw(`@a[name="${trusted.player}"]`, "e");
            }
          }*/
//        }
        //if (bot.players.find((player) => player.profile.name !== trusted.player)) return
        //for (const eachBot of bot.bots) {
//        if (bot.players.find((player) => player.profile.name === trusted.player)) {
//          bot.tellraw(`@a[name="${bot.players.find((player) => player.profile.name === trusted.player).profile.name}"]`, "e");
//        }
        //}
//        bot.chat.message(`${trusted.player} joined the game`);
//      }
//      }
      } catch (e) {
        console.log(e.stack);
      }
    })
  })
/*    bot.on('packet.login', (data) => {
      console.log(bot.players.find((players) => players.profile.name === trusted.player))
      console.log(bot.players)
      if (bot.players.find((player) => player.profile.name === trusted.player)) {
        bot.chat.message('player joined the game')
      }
    })
 multiplayer.player.joined
[{"insertion":"Parker2991","clickEvent":{"action":"suggest_command",
"value":"/tell Parker2991 "},"hoverEvent":{"action":"show_entity",
"contents":{"type":"minecraft:player",
"id":"85f5b68d-a567-3877-9701-3cd7404bc9d9",
"name":{"text":"Parker2991"}}},"text":"Parker2991"}]
[
  {
    insertion: 'Parker2991',
    clickEvent: { action: 'suggest_command', value: '/tell Parker2991 ' },
    hoverEvent: { action: 'show_entity', contents: [Object] },
    text: 'Parker2991'
  }
]
yellow
*/
  /*for (const trusted in trustedPlayers) {
    component.push({
      translate: '%s',
      color: config.colors.commands.tertiary,
      with: [
        { text: 'e' }
      ]
    })
//    console.log(component)
  }*/
   
 // bot.tellraw("@a", component)

}
