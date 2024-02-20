
{
  module.exports = {

    bots: [
{
      host: "localhost",
  username:username(),
      version:"1.20.1",
      reconnectDelay: 6000,

      commands: {
        prefix: "prefixhere"
      },
      Core: {
        customName:"CoreCustomNameHere"
  },
      discord: {
        channelId: "DiscordChannelIdHere",
        invite: "DiscordServerInviteHere",
        commandPrefix: "DiscordPrefixHere"
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