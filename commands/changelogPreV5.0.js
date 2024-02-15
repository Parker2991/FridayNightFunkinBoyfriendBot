
const bots = [
 {
    name: { text: 'v0.1.0 - v0.5.0-beta', color: 'blue', bold:false },
    authors: ['Prototypes'],
   
    foundation: '11/22/22 - 1/24/23',
    exclaimer:'ehh nothing much just the release of the betas',
  },
   {
    name: { text: 'v1.0.0-beta', color: 'blue', bold:false },
    authors: ['in console test'],
   
    foundation: '1/25/23',
    exclaimer:'original commands:!cloop bcraw,!cloop sudo,!troll,!say,!op (broke),!deop (broke), !gms (broke),!freeze,!icu <--- these commands no longer can be used in game but in console for beta 1.0 commands added: fake kick,ban,kick,crashserver,stop,gmc,greetin,test(broken idk),bypass,entity spam ,gms ,stop,tntspam ,prefix ,annoy (broke results in a complete server crash keeping ayunboom down for 3 to 5 hours),freeze,crashserver,troll ,trol(more destructive),icu ,say,sudo,cloop',
  },
  {
    name: { text: 'v1.0.0', color: 'dark_red', bold:false },
    authors: ['FNFBoyfriendBot'],
   
    foundation: '1/26/23',
    exclaimer:'FNFBoyfriendBot. commands added: BOOM,deop,troll and trol(added extra code to both commands),kaboom,serverdeop, commands fixed:tp,gms,annoy(attemps to crash the server but not as bad as it was) commands untested:prefix command Broke:icu,freeze,tntspam,entityspam,tntspam? changed name to &b &lFNFBoyfriendBot may change later idk',
  },
  {
    name: { text: 'v1.0.1', color: 'green', bold:false },
    authors: [''],
   
    foundation: '1/26/23',
    exclaimer:'reworked the kaboom command and fixed the description commands but thats about it. also reworked the greeting command',
  },
  {
    name: { text: 'v1.1.0', color: 'green', bold:false },
    authors: [''],
   
    foundation: '1/26/23 2:00pm',
    exclaimer:'nothing much just added extra stuff to the troll, trol and that is about it',
  },
  {
    name: { text: 'v1.2.0', color: 'green', bold:false },
    authors: [''],
   
    foundation: '1/28/23 1:51',
    exclaimer:'for ppl me making me really mad -.- got released early',
  },
{
    name: { text: 'v2.0.0', color: 'dark_red', bold:false },
    authors: ['Major'],
   
    foundation: '2/07/23 8:01pm',
    exclaimer:'added DREAMSTANALERT,technoblade,GODSWORD,KFC,MYLEG,OHHAIL,altcrash,MyHead Reworked tntspam,entityspam,soundbreaker added Spim to the whitelist of the bot released too early than it was planned gonna be released due do the code almost leaked it had to be released early',
  },
  {
    name: { text: 'v2.1.0', color: 'green', bold:false },
    authors: [''],
   
    foundation: '2/11/23 5:30pm',
    exclaimer:'added: refillcore(had early prototypes of this was original), vanish,deop,cloopdeop,mute,cloopmute reworked: op (supposed to already op the bot but didnt work until this release) and reworked gmc (same problem with op) (had early prototypes of vanish,refillcore,gmc,and op but these were original gonna be automatic but after alot of attempts i said screw it and added 2 commands refillcore, and vanish reworked gmc and op and got them working finally) removed Spim because come to find out he couldnt be trusted',
  },
  {
    name: { text: 'v2.2.0', color: 'green', bold:false },
    authors: [''],
   
    foundation: '2/20/23',
    exclaimer:'added ckill(added back after trial and error),serversuicidal changed username of the bot from hex code to FNFBoyfriendBot because hex code for the username was confusing as it changes everytime',
  },
  {
    name: { text: 'v3.0.0-Beta', color: 'blue', bold:false },
    authors: ['blue-balled corruption'],
   
    foundation: '',
    exclaimer:'was canceled due to ayunboom being rewriten and renamed to creayun barely usable on there because commands blocks are disabled which i created a bot for that server that has no command blocks just finished the final build of the Creayun build of the bot due to chip announcing that he may make a kaboom clone yk what 1.5.2 and 1.8 support but anyway onto what is in the v3.0-beta well the beta for right now commands added:discord,version,online,list,iownyou,endmysuffering,wafflehouse,whopper,bcraw,destroycore Notes:the original say command was reworked into talking in chat without bcraw and command blocks which the bcraw chatting code is still in the bot but was reworked into the bcraw commmand. maybe some commands removed? i dont know yet edit there is 2 commands removed commands removed:tpe and serverdeop??? reworked commands :say command for right now relay chat mabe will be added as a seperate repl i dont know yet possible would need a whole code rewrite for relay chat',
  },
  {
    name: { text: 'v3.0.0', color: 'dark_red', bold:false },
    authors: ['Sky Remanifested'],
   
    foundation: '',
    exclaimer:'the full release of 3.0 the rewrite has been pushed back to 4.0 due to 3.0 already pass its release date and the code i had on hand was done but the rewrite wasnt done Added: SelfCare Made during development:Relay chat prototypes for several servers',
  },
  {
    name: { text: 'v3.0.5', color: 'green', bold:false },
    authors: [''],
   
    foundation: '',
    exclaimer:'bug fixes',
  },
  {
    name: { text: 'v3.0.9', color: 'green', bold:false },
    authors: [''],
   
    foundation: '',
    exclaimer:'commands added:Help(finally added after about a year),consolelog(added cuz yes),cloopconsolelog(added cuz yes)',
  },
  {
    name: { text: 'v3.3.0', color: 'dark_red', bold:false },
    authors: [''],
   
    foundation: '',
    exclaimer:'switched it base to 4.0s base during 4.0s development',
  },
  {
    name: { text: 'v4.0.0-beta', color: 'blue', bold:false },
    authors: ['FNFBoyfriendBot Ultimate'],
   
    foundation: '',
    exclaimer:'all of the command removed and or rewriten from version 3.0.9  Commands added or rewriten:ban,buyrealminecraft,cloop,discord,echo,errortest,freeze,help,icu,info,kick,bots,skids,romncitrash,say,selfdestruct,serversuicidal,sudo,test,trol,troll (note that this is different and is not CommandModules)Modules Added:discord,chat,chat_command_handler,command_manager,position,registry,reconnect,command_core CustomChats added:kaboom(for normal chat) (note that this is different and is not Modules)CommandModules Added:command_error,Command_source a beta release for rn',
  },
  {
    name: { text: 'v4.0.0-Alpha ', color: 'aqua', bold:false },
    authors: ['FNFBoyfriendBot Ultimate'],
   
    foundation: '',
    exclaimer:'Commands added: calculator,ckill,evaljs,urban,crash,cloopcrash,core,list,ping,netmsg,skin,tpr Commands Removed:Buyrealminecraft (note that this is different and is not CommandModules)Modules Added:op selfcare,gmc selfcare,vanish selfcare,cspy selfcare,console (note that this is different and is not Modules)CustomChats Added:u2O3a(for custom chat) added util with between(for urban) eval_colors(for evaljs)',
  },
  {
    name: { text: 'v4.0.0', color: 'dark_red', bold:false },
    authors: ['FNFBoyfriendBotX'],
   
    foundation: '8/11/23',
    exclaimer:'Bot is finished with the rewrite thank you ChipMC and chayapak for helping me rewrite the bot Heres the commands ban (mabe removing), blacklist (currently being worked on), botdevhistory, bots, calculator, changelog, ckill, cloop, cloopcrash(probably removing), core, crash, creators, discord, echo, errortest, evaljs, freeze, help, icu, list, meminfo, mineflayerbot, netmsg (Hello World!), ping (pong!), reconnect, say, selfdestruct, serversuicidal (probably removing because theres ckill), skin, sudo, test, tpr, trol (mabe renaming it to troll), troll (mabe removing it and replacing it with the trol command), urban (ong sus asf), validate, version',
  },
  {
    name: { text: 'v4.0.5', color: 'green', bold:false },
    authors: [''],
   
    foundation: '8/17/23',
    exclaimer:'bug fixes, did what i said i was gonna do in the last update',
  
  },
  {
    name: { text: 'v4.0.6', color: 'green', bold:false },
    authors: [''],
   
    foundation: '8/22/23',
    exclaimer:'added 1 console command along with updating console.js so that the bot sends a message to 1 server at a time and not a message to all the servers at a time',
  },
  {
    name: { text: 'v4.0.7', color: 'green', bold:false },
    authors: [''],
   
    foundation: '9/4/23',
    exclaimer:'merged server and botusername commands and naming the command logininfo cuz it now shows the server ip, server port, Minecraft java Version, and the Bots Username',
  },
  {
    name: { text: 'v4.0.8', color: 'green', bold:false },
    authors: [''],
   
    foundation: '9/7/23',
    exclaimer:'added the wiki command even though its semi working. bug fixes. some bugs still in the bot is netmsg showing the bots username when i used the netmsg cmd from my end and not the console i find it funny asf though',
  },
  {
    name: { text: 'v4.0.8A', color: 'gold', bold:false },
    authors: [''],
   
    foundation: '9/7/23',
    exclaimer:'added some things to the changelog cmd. still needing to fix the issue with custom chat and netmsg also added a bugs command to check what bugs are needing to be fixed',
  },
  {
    name: { text: 'v4.0.8B', color: 'gold', bold:false },
    authors: [''],
   
    foundation: '9/8/23',
    exclaimer:'made it to where it sends more messages on start up and made it to where the buildstring is in secrets',
  },
   {
    name: { text: 'v4.0.8C', color: 'gold', bold:false },
    authors: [''],
   
    foundation: '9/14/23',
    exclaimer:'added the nodejs version to the version command but thats about it still fixing the bugs with the relay chat and mabe rewriting the validation system in the bot',
  },
{
    name: { text: 'v4.0.8D', color: 'gold', bold:false },
    authors: [''],
   
    foundation: '9/16/23',
    exclaimer:'added onto the changelog command along with adding spambot and lol commands (cuz yes) along with removing the bugs command maybe adding it back sometime later also the discord relay chat and validation system mabe getting a rewrite and also updated node from v18 to v20.6.0',
  },
  {
    name: { text: 'v4.0.8E', color: 'gold', bold:false },
    authors: [''],
   
    foundation: '9/17/23',
    exclaimer:'changed the name for meminfo to serverinfo along with adding onto it and moving the nodejs, node-minecraft-protocol, and discord.js versions from the version command to the serverinfo command',
  },
{
    name: { text: 'v4.0.8F', color: 'gold', bold:false },
    authors: [''],
   
    foundation: '9/24/23',
    exclaimer:'added filesdirectories command but thats about it',
  },
  {
    name: { text: 'v4.0.9', color: 'green', bold:false },
    authors: [''],
   
    foundation: '9/26/23',
    exclaimer:'added a hover event to the custom chat for the bot',
  },
{
    name: { text: 'v4.1.0', color: 'green', bold:false },
    authors: [''],
   
    foundation: '9/27/23',
    exclaimer:'Finally changed how the validation/hashing works in the bot instead of it being sent in discord there will be a key for trusted to validate',
  },
  {
    name: { text: 'v4.1.1', color: 'green', bold:false },
    authors: [''],
   
    foundation: '9/28/23',
    exclaimer:'added uppercase and lowercase function for commands and soon gonna be completely overhauling the validation system in the bot again',
  },
  {
    name: { text: 'v4.1.2', color: 'green', bold:false },
    authors: [''],
   
    foundation: '10/02/23',
    exclaimer:'added uptime as a command but thats it',
  },
  {
    name: { text: 'v4.1.4', color: 'green', bold:false },
    authors: [''],
   
    foundation: '10/03/23',
    exclaimer:'moved the custom chat text and cmd block text to config.js',
  },
  {
    name: { text: 'v4.1.6', color: 'green', bold:false },
    authors: [''],
   
    foundation: '10/08/23',
    exclaimer:'fixed the relay chat and fixed the cr issue with urban and also fixed reconnect',
  },
  {
    name: { text: 'v4.1.7', color: 'green', bold:false },
    authors: [''],
   
    foundation: '10/08/03',
    exclaimer:'added mute, tag, and skin to selfcare',
  }, // am I even gonna be credited?
  {
    name: { text: 'v4.1.8', color: 'green', bold:false },
    authors: [''],//cai cee mmm deee sus
   
    foundation: '10/11/23',
    exclaimer:'fixed the issue with memused cee mmm dee',
  },
  {//
    name: { text: 'v4.1.9', color: 'green', bold:false },
    authors: [''],
   
    foundation: '10/12/23',
    exclaimer:'rewrote evaljs its now using isolated-vm and not vm2',
  },
  {//
    name: { text: 'v4.2.0-restore', color: 'green', bold:false },
    authors: [''],

    foundation: '10/19/23',
    exclaimer:'fixed the disconnect message for discord and the bug with the say command',
  },
  {//
    name: { text: 'v4.2.1', color: 'green', bold:false },
    authors: [''],

    foundation: '10/24/23',
    exclaimer:'rewrote the help command to allow descriptions finally along with adding things to the base of the bot for the descriptions',
  },
  {//
    name: { text: 'v4.2.2', color: 'green', bold:false },
    authors: [''],

    foundation: '10/25/23',
    exclaimer:'merged serverinfo, memused, discord, logininfo, creators, version, uptime together',
  },
  {//
    name: { text: 'v4.2.3', color: 'green', bold:false },
    authors: [''],

    foundation: '10/30/23',
    exclaimer:'added a antiskid measure (thanks _yfd)',
  },
  {//
    name: { text: 'v4.2.4', color: 'green', bold:false },
    authors: ['Spooky update (note: might as well give it a codename since its halloween)'],

    foundation: '10/31/23',
    exclaimer:'merged fard and reconnect together making recend, added more crash methods to the crash command, and remove 12 commands',
  },
  {//
    name: { text: 'v4.2.5', color: 'green', bold:false },
    authors: [''],

    foundation: '11/8/23',
    exclaimer:'patched the exploit in the discordmsg command and made it to were with the netmsg command players cannot send empty messages',
  },
  {//
    name: { text: 'v4.3.0', color: 'green', bold:false },
    authors: [''],

    foundation: '11/16/23',
    exclaimer:`color coded the console logs are LOGS in the color gold consoleserver are in the category INFO in the color green, errors after start up are in the category WARN in the color yellow, Fatal Errors/start-up errors are in the category ERROR in the color red and hashs/validation codes sent to console are in the category HASH in the color green. added the command servereval. changed config.json to config.js and moved the username() function from the end of bot.js to the end of config.js and replacing where username() after options.username with 'Player' + Math.floor(Math.random() * 1000) and added player ping/latency to list along with fixing the bug with cloop list`,
  },
  {//
    name: { text: 'v4.3.1', color: 'green', bold:false },
    authors: [''],

    foundation: '11/21/23 one day till the bots anniversary?!?!',
    exclaimer:'modified the bots boot originally it would spam the bots buildstring each time it logged into a server on boot but now it will only send it once to console on boot along with it now sending the foundationbuildstring after the buildstring sent in console. ported some commands over since chomens is pretty much dead along with adding chat support for chat.type.text and chat.type.emote',
  },
  {//
    name: { text: 'v4.3.2', color: 'green', bold:false },
    authors: [''],

    foundation: '11/23/23',
    exclaimer:'made the bots selfcare, the selfcares interval and console toggle-able along with making default options for the selfcare and its interval, the bots prefix, the bots discord prefix, the reconnectDelay interval, the core customname, and the console, partically fixed the issue with the trusted commands no being able to be ran in discord, edited the bots boot again it now also logs the amount of files its loading on boot its discord username its logged in with(also added the discord username to the info command)',
  },
        {//
    name: { text: 'v4.3.3', color: 'dark_red', bold:false },
    authors: ["Lullaby Girlfriend's LostCause"],
   
    foundation: '12/3/23',
    exclaimer:'added hover events to the help command for command descriptions, trust console and name along with click events for them added memusage and fixed the category issue with the console and added toggles to the bot for console, selfcare, and skin',
  },
        {//
    name: { text: 'v4.3.4', color: 'dark_red', bold:false },
    authors: ['Suffering Siblings'],
   
    foundation: '12/12/23',
    exclaimer:'overhauled the console and discord relay chat fixing trusted roles and making the selfcare toggleable in game also fixing the issue with hiding console only commands (thank you poopbob for helping me with that)',
  },
]//§4Lullaby §cGirlfriend's §cLost§bCause
//back
  

/*{//
    name: { text: '', color: 'gray', bold:false },
    authors: [''],
   
    foundation: '',
    exclaimer:'',
  },*/
module.exports = {
  name: 'changelogv4.3.4',
   description:['check the bots changelog'],
       trustLevel: 0,
        aliases:['clv4.3.4', 'changesv4.3.4'],
  execute (context) {
    const query = context.arguments.join(' ').toLowerCase()
const bot = context.bot
    if (query.length === 0) {
      const list = []

      for (const info of bots) {
        if (list.length !== 0) list.push({ text: ', ', color: 'gray' })
        list.push(info.name)
      }
      const category = {
 translate: ' (%s%s%s%s%s%s%s%s%s) ',
      bold: false,
      color: 'white',
      with: [
       
                { color: 'aqua', text: 'Alpha Release'},
         { color: 'white', text: ' | '},
                { color: 'blue', text: 'Beta Release'},
        { color: 'white', text: ' | '},
        { color: 'green', text: 'Minor release'},
                { color: 'white', text: ' | '},
        { color: 'gold', text: 'Revision Release'},
              { color: 'white', text: ' | '},
                { color: 'dark_red', text: 'Major Release'},
      
      ]
    }
      context.source.sendFeedback(bot.getMessageAsPrismarine(['Changelogs (', bots.length, ')', category, ' - ', ...list]).toMotd().replaceAll('\xa7','\xa7'), false)
      return
    }

    for (const info of bots) {
      const plainName = String(context.bot.getMessageAsPrismarine(info.name)).toLowerCase()
      if (plainName.includes(query)) this.sendBotInfo(info, context.bot)
    }
  },

  sendBotInfo (info, bot) {
    const component = ['']
    component.push('', info.name)
    if (info.exclaimer) component.push('\n', ' ', info.exclaimer)
    if (info.authors && info.authors.length !== 0) {
      component.push('\n', 'Codename ')
      for (const author of info.authors) {
        component.push(author, { text: ', ', color: 'gray' })
      }
      component.pop()
    }
    if (info.foundation) component.push('\n', 'Date: ', info.foundation)
    if (info.prefixes && info.prefixes.length !== 0) {
      component.push('\n', '')
      for (const prefix of info.prefixes) {
        component.push(prefix, { text: ' ', color: 'gray' })
      }
      component.pop()
    }
    bot.tellraw([component])
  }
}//it doing it just for the ones i added lol
// prob a replit moment, it probably thinks there are regexes in the strings
