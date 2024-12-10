const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { request } = require('undici');
module.exports = async () => {
  let url = await request('https://code.chipmunk.land/api/v1/repos/Parker2991/FridayNightFunkinBoyfriendBot/commits');
  let data = await url.body.json();
  let output = data[0]
  let gitCommit = execSync('git rev-parse HEAD').toString().replaceAll('\n', '').substring(0, 10);
  let urlCommit = output.sha.substring(0, 10);
  if (gitCommit !== urlCommit) {
    console.log('This build of the bot is not up to date! please update the bot at "https://code.chipmunk.land/Parker2991/FridayNightFunkinBoyfriendBot" for the latest patches and new addons');
    // this will check if the copy of the bot is up to date
  } // i got bored and made this check now cry about it

  if (!fs.existsSync(path.join(__dirname, "../../config.yml"))) {
    console.warn("Config not found creating config from the default config");
    fs.copyFileSync(
      path.join(__dirname, "../data/default_config.yml"),
      path.join(__dirname, "../../config.yml")
    )
  }
}
