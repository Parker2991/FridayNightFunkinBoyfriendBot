module.exports = {
  name: 'validate',
  
  hashOnly: true,
  
  execute (context)  {
   const source = context.source

    
   source.sendFeedback({ text: 'Valid Hash', color: 'dark_green' })
  }
}
