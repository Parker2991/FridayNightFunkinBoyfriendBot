// TODO: Maybe add more authors
/*const bots = [
  {
    name: { text: "HBot", color: "aqua", bold: false },
    authors: ["hhhzzzsss"],
    exclaimer: "HBOT HARRYBUTT LMAOOOOOOOOOOOOOOOOO",
    foundation: "java/mcprotocollib",
    prefixes: ["#"],
    maintained:'false', 
  },
 {
    name: { text: "SC09", color: "gray", bold: false },
    authors: ["spyingcreeper09"],
    exclaimer: "i approve :3",
    foundation: "NodeJS/node-minecraft-protocol",
    prefixes: ["@"],
    maintained:'true',
  },
{
    name: { text: "FBot", color: "gold", bold: false },
    authors: ["aaa"],
    exclaimer: "frog :3",
    foundation: "NodeJS/Node-minecraft-protocol",
    prefixes: ["+"],
    maintained:'true?',  
  },
  {
    name: { text: "64Bot", color: "gold", bold: false },
    authors: ["64Will64"],
    exclaimer: "NINTENDO 64?!?!??!?! 69Bot when??????",
    foundation: "NodeJS/Mineflayer",
    prefixes: ["w="],
    maintained:'false',
  },
  {
    name: { text: "Nebulabot", color: "dark_purple", bold: false },
    authors: ["IuCC"],
    exclaimer: "the void",
    foundation: "NodeJS/Node-minecraft-protocol",
    prefixes: ["["],
    maintained:'false',
  },
  {
    name: [
      { text: "Prism", color: "#00FF9C", bold: true },
      { text: "Bot", color: "white",bold:true },
    ],
    authors: ["IuCC"],
    exclaimer: "prismarine :3",
    foundation: "NodeJS/Node-minecraft-protocol",
    prefixes: ["["],
    maintained:'true',
    
  },
  {
    name: { text: "SharpBot", color: "aqua", bold: false },
    authors: ["64Will64"],
    exclaimer:
      "sharp as in the tv? idfk im out of jokes also the first c# bot on the list??",
    foundation: "C#/MineSharp",
    prefixes: ["s="],
    maintained:'false',
  },

  {
    name: { text: "MoonBot", color: "red", bold: false },
    authors: ["64Will64"],
    exclaimer: "stop mooning/mooing me ",
    foundation: "NodeJS/Mineflayer",
    prefixes: ["m="],
    maintained:'false',
  },
  {
    name: { text: "TableBot", color: "yellow", bold: false },
    authors: ["12alex12"],
    exclaimer: "TABLE CLOTH BOT?!?! ",
    foundation: "NodeJS/Node-minecraft-protocol",
    prefixes: ["t!"],
    maintained:'false?',
  },
  {
    name: [
      { text: "Evil", color: "dark_red", bold: false },
      { text: "Bot", color: "dark_purple" },
    ],
    authors: ["FusseligerDev"],
    exclaimer: "",
    foundation: "Java/Custom",
    prefixes: ["!"],
    maintained:'false?',
  },
  {
    name: { text: "SBot Java", color: "white", bold: false }, // TODO: Gradient
    authors: ["evkc"],
    foundation: "Java/MCProtocolLib",
    prefixes: [":"],
    maintained:'true',
  },
  {
    name: { text: "SBot Rust", color: "white", bold: false }, // TODO: Gradient
    authors: ["evkc"],
    foundation: "Rust",
    prefixes: ["re:"],
    maintained:':shrug:',
  },
  {
    name: { text: "Z-Boy-Bot", color: "dark_purple", bold: false }, // TODO: Gradient
    exclaimer: "Most likely skidded along with kbot that the dev used",
    authors: ["Romnci"],
    foundation: "NodeJS/mineflayer or Java/mcprotocollib idfk",
    prefixes: ["Z]"],
    maintained:'false',
  },
  {
    name: { text: "ABot", color: "gold", bold: true }, // TODO: Gradient
    exclaimer: "not used anymore (replaced by V2)",
    authors: [{ text: "_yfd", color: "light_purple" }],
    foundation: "NodeJS/Node-Minecraft-Protocol",
    prefixes: ["<"],
    maintained:'false',
  },
  {
    name: { text: "ABot-V2", color: "gold", bold: true }, // TODO: Gradient
    exclaimer: "",
    authors: [{ text: "_yfd", color: "light_purple" }],
    foundation: "NodeJS/Node-Minecraft-Protocol",
    prefixes: ["<"],
    maintained:'false',
  },
  {
    name: { text: "FardBot", color: "light_purple", bold: false },
    authors: ["_yfd"],
    exclaimer: "bot is dead lol",
    foundation: "NodeJS/Mineflayer",
    prefixes: ["<"],
    maintained:'false',
  },

  {
    name: { text: "ChipmunkBot Java", color: "green", bold: false },
    authors: ["_ChipMC_"],
    exclaimer:
      "chips? also shoutout to chip and chayapak for helping in the rewrite",

    foundation: "Java/MCProtocolLib",
    prefixes: ["'", "/'"],
    maintained:'false',
  },
  {
    name: { text: "ChipmunkBot NodeJS", color: "green", bold: false },
    authors: ["_ChipMC_"],
    foundation: "NodeJS/Node-Minecraft-Protocol",
    maintained:'true', 
},
  {
    name: { text: "TestBot", color: "aqua", bold: false },
    authors: ["Blackilykat"],
    foundation: "Java/MCProtocolLib",
    prefixes: ["-"],
    maintained:'false',
  },
  {
    name: { text: "UBot", color: "grey", bold: false },
    authors: ["HexWoman"],
    exclaimer: "UwU OwO",

    foundation: "NodeJS/node-minecraft-protocol",
    prefixes: ['"'],
    maintained:'false',
  },
  {
    name: { text: "ChomeNS Bot Java", color: "yellow", bold: false },
    authors: ["chayapak"],
    exclaimer: "wow its my bot !! ! 4374621q43567%^&#%67868-- chayapak",
    foundation: "Java/MCProtocolLib",
    prefixes: ["*", "cbot ", "/cbot "],
    maintained:'false',
  },
  {
    name: { text: "ChomeNS Bot NodeJS", color: "yellow", bold: false },
    authors: ["chayapak"],

    foundation: "NodeJS/Node-Minecraft-Protocol",
    prefixes: ["*", "cbot", "/cbot"],
    maintained:'false',
  },
  {
    name: { text: "RecycleBot", color: "dark_green", bold: false },
    foundation: ["MorganAnkan"],
    exclaimer: "nice bot",
    language: "NodeJS/node-minecraft-protocol",
    prefixes: ["="],
    maintained:'true',
  },
  {
    name: { text: "neobot", color: "blue", bold: false },
    exclaimer: "n     e     o    b   o   t ;oslkdfj;salkdfj;ladsjf",
           authors: ["mirkokral"],
    foundation: "java/MCProtocolLib",
    prefixes: ["_"],
    maintained:'false',
  },
  {
    name: { text: "ManBot", color: "dark_green", bold: false },
    exclaimer:
      "(more like men bot :skull:) OH HAAAAAAAAAAAAAAIIILL LOGINTIMEDOUT",
    authors: ["Man/LogintimedOut"],
    foundation: "NodeJS/mineflayer",
    prefixes: ["(Note:I dont remember!!)"],
    maintained:'false',
  },
  {
    name: [
      { text: "Useless", color: "red", bold: false },
      { text: "Bot", color: "gray", bold: false },
    ],
    exclaimer: "it isnt useless its a good bot................",
    authors: ["IuCC"],
    foundation: "NodeJS/node-minecraft-protocol",
    prefixes: ["["],
    maintained:'false',
  },
  {
    name: [
      { text: "Blurry", color: "dark_purple", bold: false },
      { text: "Bot", color: "red" },
    ],
    exclaimer: "§4§kfuck you",
    authors: ["SirLennox"],
    foundation: "???",
    prefixes: [","],
    maintained:'false',
  },
  {
    name: [{ text: "SnifferBot", color: "gold", bold: false }],
    exclaimer: "sniff sniff FNFBoyfriendBot simp",
    authors: ["popbob"],
    foundation: "NodeJS/Node-minecraft-protocol",
    prefixes: [">"],
    maintained:'false',
  },
  {
    name: [{ text: "XBot", color: "dark_purple", bold: false }],
    exclaimer: "",
    authors: ["popbob"],
    foundation: "ts-Node/Node-minecraft-protocol",
    prefixes: ["$"],
    maintained:':shrug:',
  },
  {
    name: [
      { text: "Kitty", color: "gold", bold: false },{text:"Corp", color:'aqua',bold:false},
      { text: "Bot", color: "yellow",bold:false },
    ],
    exclaimer: "3 words ginlang is gay",
    authors: ["ginlang , G6_, ArrayBuffer, and i guess more??"],
    foundation: "NodeJS/node-minecraft-protocol",
    prefixes: ["^"],
    maintained:'false',
  },

  {
    name: [
      { text: "FNF", color: "dark_purple", bold: false },
      { text: "Boyfriend", color: "aqua", bold: false },
      { text: "Bot", color: "dark_red", bold: false },
      { text: " nmp", color: "black", bold: false },
    ],
    authors: [
      { text: "Parker2991", color: "dark_red" },
      { text: " _ChipMC_", color: "dark_green", bold: false },
      { text: " chayapak", color: "yellow", bold: false },
      { text: " _yfd", color: "light_purple", bold: false },
      { text: "popbob", color: "gold" },
    ],
    exclaimer: "FNFBoyfriendBot NMP Rewrite",
    foundation: "NodeJS/node-minecraft-protocol",
    prefixes: ["~ % &"],
    maintained:'true',
  },
  {
    name: [
      { text: "FNF", color: "dark_purple", bold: false },
      { text: "Boyfriend", color: "aqua", bold: false },
      { text: "Bot", color: "dark_red", bold: false },
      { text: " legacy", color: "green", bold: false },
    ],
    authors: [
      { text: "Parker2991", color: "dark_red" },
      { text: " _ChipMC_", color: "dark_green", bold: false },
    ],
    exclaimer:
      "1037 LINES OF CODE WTFARD!??! also this version is in console commands only",
    foundation: "NodeJS/mineflayer",
    prefixes: [],
    maintained:'false',
  },
];
*/
const CommandError = require('../CommandModules/command_error')
const fs = require('fs')
const path = require('path')
module.exports = {
  name: "bots",
  description: ["shows a list of known bots"],
  aliases: ["knownbots"],
  trustLevel: 0,
 usage:[""],
  execute(context) {

//const bots = fs.readdirSync(path.join(__dirname,'../util/bots')).forEach(file => require(`../util/bots/${file}`))
//const bots = require(fs.readdirSync(path.join(__dirname,'../util/bots')).forEach(file => (file)))
//const bots = require(['../util/bots'].forEach(file => file))
  const query = context.arguments.join(" ").toLowerCase();
    const bot = context.bot;
const botsFiles = path.join(__dirname, '../util/bots'); 
 //list = []; 
//for (const file of fs.readdirSync('./util/bots')) { 
//bots.push(require(path.join(__dirname, '../util/bots', file)))
//};
 //name = Object.values(bots.map(name => name))
//auth = Object.values(bots).map(sus => sus.authors)
 //exclaimer = Object.values(bots).map(sus => sus.exclaimer)
 //prefixes = Object.values(bots).map(sus => sus.prefixes)
 //foundation = Object.values(bots).map(sus => sus.foundation)
 //prefix = Object.values(bots).map(sus => sus.prefixes)
// maintained = Object.values(bots).map(sus => sus.maintained)
//amongus = Object.values(bots).map(sus => sus)
    if (query.length === 0) {
   const list = [];
if(!bot.options.Core.enabled){
        throw new CommandError('Coreless mode is active can not execute command!')
}else{
//for (const file of fs.readdirSync('./util/bots')) {
//bots.push(require(path.join(__dirname, '../util/bots', file)))
//};
//bots = fs.readdirSync('./util/bots')
for (const file of fs.readdirSync('./util/bots')) {
list.push(require(path.join(__dirname,'../util/bots',file)))
}  
    for (const info of bots) {
        if (bots.length !== 0) list.push({ text: ", ", color: "gray" }); // list.push(info.name)
        list.push(info.name);
      }
bot.tellraw(bots.name)
console.log(Object.values(bots).map(name => name))
//const ping = Object.values(bot.players).map(player =>player.latency)
      bot.sendFeedback(bot.getMessageAsPrismarine(["Known bots (", bots.length, ") - ", ...list])?.toMotd().replaceAll('\xa7','\xa7'),false);
      return;
}
    }
    for (const info of bots) {
      const plainName = String(
        context.bot.getMessageAsPrismarine(info.name),
      ).toLowerCase();
      if (plainName.includes(query)) this.sendBotInfo(info, context.bot);
    }
  },

  sendBotInfo(info, bot) {
    const component = [""];
    //component.push("Name: ", amongus.name);
//const name = Object.values(bots.map(name => name.name))  
//const auth = Object.values(bots).map(sus => sus.authors)  
//const exclaimer = Object.values(bots).map(sus => sus.exclaimer)
//const prefixes = Object.values(bots).map(sus => sus.prefixes)
//const foundation = Object.values(bots).map(sus => sus.foundation)
//const prefix = Object.values(bots).map(sus => sus.prefixes)
//const maintained = Object.values(bots).map(sus => sus.maintained)
  component.push("Name: ", Object.values(bots).map(name => name.name));
console.log(name)
if (info.exclaimer) component.push("\n", "Exclaimer: ", info.exclaimer);
    if (info.authors && info.authors.length !== 0) {
      component.push("\n", "Authors: ");
      for (const author of info.authors) {
        component.push(author, { text: ", ", color: "gray" });
      }
      component.pop();
    }
    if (info.foundation) component.push("\n", "Foundation: ", info.foundation);
    if (info.prefixes && info.prefixes.length !== 0) {
      component.push("\n", "Prefixes: ");
      for (const prefix of info.prefixes) {
        component.push(prefix, { text: ", ", color: "gray" });
      }
      component.pop();
    }
    if(info.maintained) component.push("\n","Maintained: ",info.maintained)
    
    bot.tellraw([component]);
  },
};
//it doing it just for the ones i added lol
// prob a replit moment, it probably thinks there are regexes in the strings
