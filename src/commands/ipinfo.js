const { request } = require('undici');
const util = require('util');
module.exports = {
  name: 'ipinfo',
  trustLevel: 0,
  aliases: [
  ],
  description: 'Make me say something',
  usages: [
    "<message>"
  ],
  async execute (context) {
    const bot = context.bot;
    const args = context.arguments;
    try {
      const url = await request(`https://get.geojs.io/v1/ip/geo/${args}.json`)
      const outputJson = await url.body.json();
      console.log(outputJson)
//      bot.tellraw("@a", util.inspect(outputJson));
      bot.tellraw("@a", [
        { text: `Ip \u203a `, color: "gray" },
        { text: `${outputJson.ip}\n`, color: "gold" },
        { text: `Country \u203a ${outputJson.country}\n`, color: "gray" },
        { text: `Region \u203a ${outputJson.region}\n`, color: "gray" },
        { text: `City \u203a ${outputJson.city}\n`, color: "gray" },
        { text: `Timezone \u203a ${outputJson.timezone}\n`, color: "gray" },
        { text: `Organization \u203a ${outputJson.organization_name}\n`, color: "gray" },
        { text: 'I dont leak cords dont worry :3' }
      ])
    } catch (e) {
      bot.tellraw("@a", { text: e.toString(), color: 'dark_red' })
    }
  },
  discordExecute (context) {
    const bot = context.bot;
    const args = context.arguments;
  }
}

