const fs = require('fs');
const path = require('path');
module.exports = () => {
  if (!fs.existsSync(path.join(__dirname, "../../config.yml"))) {
    console.warn("Config not found creating config from the default config");
    fs.copyFileSync(
      path.join(__dirname, "../data/default_config.yml"),
      path.join(__dirname, "../../config.yml")
    )
  }

/*  if (!fs.existsSync(path.join(__dirname, "../data/filter.json"))) {
    console.warn("filter json not found creating the file,......");
    let data = [{ ignoreCase: false, regexed: false, name: 'whatever player username idfk' }]
    fs.writeFileSync(path.join(__dirname, "../data/filter.json"), JSON.stringify(data))
  }*/

/*
  if (!fs.existsSync(path.join(__dirname, "../data/trustedPlayers.json"))) {
    console.warn("Trusted Players json not found creating the file,......");
    let data = [{player: ""}]
    fs.writeFileSync(path.join(__dirname, "../data/trustedPlayers.json"), JSON.stringify(data))
  }*/
}
