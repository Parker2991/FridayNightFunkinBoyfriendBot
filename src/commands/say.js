const CommandError = require("../CommandModules/command_error");
const buildstring = process.env["buildstring"];
const foundation = process.env["FoundationBuildString"];
module.exports = {
  name: "say",
  //<< this one line of code broke it lmao
  description: ["make me say something in custom chat"],
  trustLevel: 0,
  aliases: [
    "tellrawsay",
    "tellrawmsg",
    "trmessage",
    "tellrawmessage",
    "sourcesendfeedbacksay",
    "sourcesendfeedbackmsg",
    "sourcesendfeedbackmessage",
    "ssfbmsg",
    "ssfmessage",
  ],
usage:["<message>"],
  execute(context) {
    const message = context.arguments.join(" ");
    const bot = context.bot;

    const prefix = {
      translate: "[%s%s%s] \u203a %s",
      bold: false,
      color: "white",
      with: [
        {
          color: "dark_purple",
          text: "FNF",
          bold: true,
        },
        {
          color: "#00FFFF",
          text: "Boyfriend",
          bold: true,
        },
        { color: "dark_red", text: "Bot", bold: true },

        { color: "green", text: `${message}` },
      ],
    };
//if(!bot.options.Core.enabled){
  //      throw new CommandError('&4Will not work because the core is not enabled please use the echo command')
//}else{ 
    bot.tellraw([prefix]);
}
 // },
};

//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace

// Parker, why is hashing just random characters???
//wdym