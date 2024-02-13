module.exports = {
  name: 'validate',
  description:['validate in the bot'],

  hashOnly: true,
        consoleOnly:false,
  execute (context)  {
   const source = context.source

    
   source.sendFeedback({ text: 'Valid Hash', color: 'green' })
  }
}
