// TODO: Maybe add more authors
const bots = [
  {
    name: { text: "HBot", color: "aqua", bold: false },
    authors: ["hhhzzzsss"],
    exclaimer: "HBOT HARRYBUTT LMAOOOOOOOOOOOOOOOOO",
    foundation: "java/mcprotocollib",
    prefixes: ["#"],
  },
  {
    name: [{ text: "FBot", color: "gold" }],
    authors: ["popbob/aaa"],
    exclaimer: "",
    foundation: "nodejs/node-minecraft-protocol",
    prefixes: ["+"],
  },
  
  {
    name: { text: "CddehhBot", color: "red", bold: false },
    authors: ["CaydennO1","spyingcreeper09"],
    exclaimer: "WHAT IS THIS GOOFY AAAH FUCKING BOT FUCKING PIECE OF RETARDED ASS SHIT BOT ITS SO FUCKING SHIT I WANNA IPFILTER IT WITH FUCKING CHOMENS",
    foundation: "nodejs/mineflayer",
    prefixes: [","],
  },
  {
    name: { text: "TurtleBot", color: "green", bold: false },
    authors: ["TurtleKid"],
    exclaimer: "nmp when?",
    foundation: "nodejs/mineflayer",
    prefixes: ["\\"],
  },
  {
    name: { text: "NothingBot", color: "dark_red", bold: false },
    authors: ["Yaode_owo"],
    exclaimer: "uwu",
    foundation: "nodejs/mineflayer",
    prefixes: ["?"],
  },
   {
    name: { text: "SC09Bot", color: "dark_gray", bold: false },
    authors: ["spyingcreeper09"],
    exclaimer: ":3",
    foundation: "nodejs/node-minecraft-protocol",
    prefixes: ["@"],
  },
    {
    name: { text: "HorizonBot", color: "gold", bold: false },
    authors: ["ZenZoya","Yaode_owo","Parker2991", "and others"],
    exclaimer: "originally called §5FleamBot§r",
    foundation: "nodejs/node-minecraft-protocol",
    prefixes: ["^"],
  },
  {
    name: { text: "64Bot", color: "gold", bold: false },
    authors: ["64Will64"],
    exclaimer: "NINTENDO 64?!?!??!?! 69Bot when??????",
    foundation: "NodeJS/Mineflayer",
    prefixes: ["w="],
  },
  {
    name: { text: "Nebulabot", color: "dark_purple", bold: false },
    authors: ["IuCC"],
    exclaimer: "the void",
    foundation: "NodeJS/Node-minecraft-protocol",
    prefixes: ["["],
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
  },
  {
    name: { text: "SharpBot", color: "aqua", bold: false },
    authors: ["64Will64"],
    exclaimer:
      "sharp as in the tv? idfk im out of jokes also the first c# bot on the list??",
    foundation: "C#/MineSharp",
    prefixes: ["s="],
  },

  {
    name: { text: "MoonBot", color: "red", bold: false },
    authors: ["64Will64"],
    exclaimer: "stop mooning/mooing me ",
    foundation: "NodeJS/Mineflayer",
    prefixes: ["m="],
  },
  {
    name: { text: "TableBot", color: "yellow", bold: false },
    authors: ["12alex12"],
    exclaimer: "TABLE CLOTH BOT?!?! ",
    foundation: "NodeJS/Node-minecraft-protocol",
    prefixes: ["t!"],
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
  },
  {
    name: { text: "SBot Java", color: "white", bold: false }, // TODO: Gradient
    authors: ["evkc"],
    foundation: "Java/MCProtocolLib",
    prefixes: [":"],
  },
  {
    name: { text: "SBot Rust", color: "white", bold: false }, // TODO: Gradient
    authors: ["evkc"],
    foundation: "Rust",
    prefixes: ["re:"],
  },
  {
    name: { text: "Z-Boy-Bot", color: "dark_purple", bold: false }, // TODO: Gradient
    exclaimer: "Most likely skidded along with kbot that the dev used",
    authors: ["Romnci"],
    foundation: "NodeJS/mineflayer or Java/mcprotocollib idfk",
    prefixes: ["Z]"],
  },
  {
    name: { text: "ABot", color: "gold", bold: true }, // TODO: Gradient
    exclaimer: "not used anymore (replaced by V2)",
    authors: [{ text: "_yfd", color: "light_purple" }],
    foundation: "NodeJS/Node-Minecraft-Protocol",
    prefixes: ["<"],
  },
  {
    name: { text: "ABot-V2", color: "gold", bold: true }, // TODO: Gradient
    exclaimer: "",
    authors: [{ text: "_yfd", color: "light_purple" }],
    foundation: "NodeJS/Node-Minecraft-Protocol",
    prefixes: ["<"],
  },
  {
    name: { text: "FardBot", color: "light_purple", bold: false },
    authors: ["_yfd"],
    exclaimer: "bot is dead lol",
    foundation: "NodeJS/Mineflayer",
    prefixes: ["<"],
  },

  {
    name: { text: "ChipmunkBot Java", color: "green", bold: false },
    authors: ["_ChipMC_"],
    exclaimer:
      "chips? also shoutout to chip and chayapak for helping in the rewrite",

    foundation: "Java/MCProtocolLib",
    prefixes: ["'", "/'"],
  },
  {
    name: { text: "ChipmunkBot NodeJS", color: "green", bold: false },
    authors: ["_ChipMC_"],
    foundation: "NodeJS/Node-Minecraft-Protocol",
  },
  {
    name: { text: "TestBot", color: "aqua", bold: false },
    authors: ["Blackilykat"],
    foundation: "Java/MCProtocolLib",
    prefixes: ["-"],
  },
  {
    name: { text: "UBot", color: "gray", bold: false },
    authors: ["HexWoman"],
    exclaimer: "UwU OwO",

    foundation: "NodeJS/node-minecraft-protocol",
    prefixes: ['"'],
  },
  {
    name: { text: "ChomeNS Bot Java", color: "yellow", bold: false },
    authors: ["chayapak"],
    exclaimer: "wow its my bot !! ! 4374621q43567%^&#%67868-- chayapak \n rip ChomeNS bot i wonder what chayapak is currently doing -- Parker2991",
    foundation: "Java/MCProtocolLib",
    prefixes: ["*", "cbot ", "/cbot "],
  },
  {
    name: { text: "ChomeNS Bot NodeJS", color: "yellow", bold: false },
    authors: ["chayapak"],

    foundation: "NodeJS/Node-Minecraft-Protocol",
    prefixes: ["*", "cbot", "/cbot"],
  },
  {
    name: { text: "RecycleBot", color: "dark_green", bold: false },
    foundation: ["MorganAnkan"],
    exclaimer: "nice bot",
    language: "NodeJS/node-minecraft-protocol",
    prefixes: ["="],
  },
  {
    name: { text: "neobot", color: "blue", bold: false },
    exclaimer: "n     e     o    b   o   t ;oslkdfj;salkdfj;ladsjf",
           authors: ["mirkokral"],
    foundation: "java/MCProtocolLib",
    prefixes: ["_"],
  },
  {
    name: { text: "ManBot", color: "dark_green", bold: false },
    exclaimer:
      "(more like men bot :skull:) OH HAAAAAAAAAAAAAAIIILL LOGINTIMEDOUT",
    authors: ["Man/LogintimedOut"],
    foundation: "NodeJS/mineflayer",
    prefixes: ["(Note:I dont remember!!)"],
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
  },
/*  {
    name: [
      { text: "Blurry", color: "dark_purple", bold: false },
      { text: "Bot", color: "red" },
    ],
    exclaimer: "KILL YOURSELF BIIIIIIIIIIIIIIIIIITCCCCCCCCCCCCH;lksadjklaklsjjk;lavsklja;kjlvkjladv;kjavdjkavjk;lvdkj;lsajvk;ds",
    authors: ["SirLennox"],
    foundation: "Java/custom",
    prefixes: [","],
  },*/
  {
    name: [{ text: "SnifferBot", color: "gold", bold: false }],
    exclaimer: "sniff sniff FNFBoyfriendBot simp",
    authors: ["popbob/aaa"],
    foundation: "NodeJS/Node-minecraft-protocol",
    prefixes: [">"],
  },
  {
    name: [{ text: "XBot", color: "dark_purple", bold: false }],
    exclaimer: "",
    authors: ["popbob/aaa"],
    foundation: "ts-Node/Node-minecraft-protocol",
    prefixes: ["$"],
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
      { text: "popbob/aaa", color: "gold" },
      { text: "MorganAnkan", color: "dark_green" },
      { text: "TurtleKid", color: "green" },
    ],
    exclaimer: "v4.0x - current",
    foundation: "NodeJS/node-minecraft-protocol",
    prefixes: [ '~', 'fnfbfbot ', '￼', '‮', '█' ],
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
  },
];
const CommandError = require('../util/command_error')
module.exports = {
  name: "bots",
  description: ["shows a list of known bots"],
  aliases: ["knownbots"],
  trustLevel: 0,
  usage:[""],
 async execute(context) {
    const query = context.arguments.join(" ").toLowerCase();
    const bot = context.bot;
    if (query.length === 0) {
      const list = [];
      for (const info of bots) {
        if (list.length !== 0) {
           list.push({ text: ", ", color: "gray" });
        }
        list.push(info.name);

      }
      bot.tellraw("@a",
        bot.getMessageAsPrismarine(["Known bots (", bots.length, ") - ", ...list]).toMotd().replaceAll('\xa7','\xa7'),
        false,
      );
      return;
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
    component.push("Name: ", info.name);
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
    bot.tellraw("@a", [component]);
  },
};
//it doing it just for the ones i added lol
// prob a replit moment, it probably thinks there are regexes in the strings
