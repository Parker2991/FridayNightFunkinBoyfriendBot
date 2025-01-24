const CommandError = require('../../util/command_error');
const { request } = require('undici');

module.exports = {
  data: {
    name: "urban",
    aliases: [
      "urbandictionary"
    ],
    description: "look up definitions on urban dictionary",
    trustLevel: 0,
    usages: [
      "<definition>"
    ]
  },
  async execute (context) {

  }
}