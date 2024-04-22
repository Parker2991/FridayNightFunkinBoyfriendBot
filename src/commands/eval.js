const ivm = require('isolated-vm');
const isolate = new ivm.Isolate({ memoryLimit: 128 });
const { stylize } = require('../util/eval_colors')
const util = require('util')
module.exports = {
  name: 'eval',
   description:[''],
        aliases:[],
       trustLevel: 0,
usage:[
"<command/message>",
],
async execute (context) {
    const bot = context.bot;
    const args = context.arguments;
   

// Create a new isolate limited to 128MB
const ivm = require('isolated-vm');
const isolate = new ivm.Isolate({ memoryLimit: 128 });

// Create a new context within this isolate. Each context has its own copy of all the builtin
// Objects. So for instance if one context does Object.prototype.foo = 1 this would not affect any
// other contexts.
const cOntext = isolate.createContextSync();

// Get a Reference{} to the global object within the context.
const jail = cOntext.global;

// This makes the global object available in the context as `global`. We use `derefInto()` here
// because otherwise `global` would actually be a Reference{} object in the new isolate.
jail.setSync('global', jail.derefInto());

// We will create a basic `log` function for the new isolate to use.
jail.setSync('log', function(...args) {
	console.log(...args);
});

// And let's test it out:
cOntext.evalSync('let e');
// > hello world

const hostile = isolate.compileScriptSync(`${args.join(' ')}`)
//console.log(await hostile)	
console.log(hostile.run(`e`))

// Using the async version of `run` so that calls to `log` will get to the main node isolate

(`${hostile.run(context).catch(err => console.error(err))}`)

},
discordExecute(context) {
 const bot = context.bot;
 const args = context.arguments;
}
}
