const ivm = require('isolated-vm');//new ivm.Isolate(options)
const CommandError = require('../CommandModules/command_error')
// const isolate = new ivm.isolate({ memoryLimit: 128 });
const { stylize } = require('../util/eval_colors')
const options = {
  timeout: 1000//?
}
let isolate = new ivm.Isolate({ memoryLimit: 32 }) // 32 seems fine

module.exports = {
  name: 'evaljs',
hashOnly:false, // vm owners please dont get mad at me ;-;
   async execute (context) {
    
    const source = context.source
    const args = context.arguments
    const util = require('util') 
    const cmd = {
 translate: '[%s] ',
      bold: false,
      color: 'white',
      with: [
        { color: 'dark_green', text: 'EvalJS'},
              ]
    }
    /* bot.tellraw(selector, { text: util.inspect(bot.vm.run(args.slice(1).join(' ')), { stylize }).substring(0, 32000) })
      } catch (err) {
        bot.tellraw(selector, { text: util.inspect(err).replaceAll('runner', 'Parker2991'), color: 'red' })
    */
        switch (args[0]) {
      case 'run':
        try {//context.eval()
          /*
          let kitty
          const output = test.compileScript(args.slice(1).join(' '))// ivm.createContext(args.slice(1).join(' '))
          const realoutput = output.then(result => {
            kitty = result.run({
              context: amonger,
            })
          }).catch(reason => {
            console.error(reason) // 
          })
          */
         // old coding

         // YOU KILLED THE TERMINAL LMFAO
         
//fr
try {
  let nerd = "";
  const script = args.slice(1).join(' '); // Ensure script is a string
  const cOmtext = isolate.createContext();

  (async () => {
    try {
      let result = await (await cOmtext).eval(script, {
        timeout: 1000
      })
      nerd = result;
      source.sendFeedback([cmd, { text: util.inspect(result, { stylize }) }]);
    } catch (reason) {
      nerd = reason;
      source.sendFeedback([cmd, { text: String(reason.message), color: 'white'  }]);
      console.log(`AAA at ${reason}\n${reason.stack}`);
    }
  })();
} catch (reason) {
  source.sendFeedback([cmd, { text: String("UwU OwO ewwor" + reason.message), color: 'white'  }]);
  console.log(`AAA at ${reason}\n${reason.stack}`);
}
      
        // credits to chatgpt because im lazy mabe mabe? idfk        again ty
        //
        break//
      } catch (e) {
        // ral
      }
      case 'reset':
    
      isolate = null
      isolate = new ivm.Isolate({ memoryLimit: 32 }) // 32 seems fine
       source.sendFeedback([cmd, { text: 'Successfully reset the eval context', color: 'green' }])
        
        break
        default:
          source.sendFeedback([cmd, { text: 'Invalid option!', color: 'dark_red' }])
    }
  }
}


/*
this is typescript

import ivm from 'isolated-vm';

const code = `(function() { return 'Hello, Isolate!'; })()`;

const isolate = new ivm.Isolate({ memoryLimit: 8 }); // mego bites
const script = isolate.compileScriptSync(code);
const context = isolate.createContextSync();
//this 
// Prints "Hello, Isolate!"
console.log(script.runSync(context));

*/