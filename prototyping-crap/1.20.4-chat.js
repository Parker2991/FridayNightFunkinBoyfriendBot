const version = '1.20.4'
const { fromNotch } = require('prismarine-chat')(version)
const nbt = require('prismarine-nbt')
//const msg = {"type":"compound","value":{"extra":{"type":"list","value":{"type":"compound","value":[{"extra":{"type":"list","value":{"type":"compound","value":[{"color":{"type":"string","value":"dark_gray"},"text":{"type":"string","value":"["}},{"color":{"type":"string","value":"aqua"},"text":{"type":"string","value":"Prefix: "}},{"color":{"type":"string","value":"dark_red"},"text":{"type":"string","value":"~"}},{"color":{"type":"string","value":"dark_gray"},"text":{"type":"string","value":"]"}},{"":{"type":"string","value":" "}}]}},"text":{"type":"string","value":""}},{"extra":{"type":"list","value":{"type":"compound","value":[{"color":{"type":"string","value":"red"},"text":{"type":"string","value":"FNFBoyfriendBot"}}]}},"text":{"type":"string","value":""}},{"":{"type":"string","value":":"}},{"":{"type":"string","value":" "}},{"extra":{"type":"list","value":{"type":"compound","value":[{"color":{"type":"string","value":"dark_purple"},"text":{"type":"string","value":"FNF"}},{"color":{"type":"string","value":"aqua"},"text":{"type":"string","value":"Boyfriend"}},{"color":{"type":"string","value":"dark_red"},"text":{"type":"string","value":"Bot "}},{"color":{"type":"string","value":"white"},"text":{"type":"string","value":"- "}},{"color":{"type":"string","value":"dark_red"},"text":{"type":"string","value":"Parker"}},{"color":{"type":"string","value":"black"},"text":{"type":"string","value":"2991"}}]}},"text":{"type":"string","value":""}}]}},"text":{"type":"string","value":""}}}
const msg = {"type":"compound","value":{"extra":{"type":"list","value":{"type":"compound","value":[{"extra":{"type":"list","value":{"type":"compound","value":[{"bold":{"type":"byte","value":1},"color":{"type":"string","value":"dark_red"},"text":{"type":"string","value":"["}},{"bold":{"type":"byte","value":1},"color":{"type":"string","value":"red"},"text":{"type":"string","value":"OP"}},{"bold":{"type":"byte","value":1},"color":{"type":"string","value":"dark_red"},"text":{"type":"string","value":"] "}},{"color":{"type":"string","value":"red"},"text":{"type":"string","value":""}}]}},"text":{"type":"string","value":""}},{"extra":{"type":"list","value":{"type":"compound","value":[{"color":{"type":"string","value":"red"},"text":{"type":"string","value":"birdevent"}}]}},"text":{"type":"string","value":""}},{"":{"type":"string","value":":"}},{"":{"type":"string","value":" "}},{"":{"type":"string","value":"?"}}]}},"text":{"type":"string","value":""}}}
function tryParse (json) {

}
function processNbtMessage (msg) {
  if (!msg || msg.type === 'end') return null
  const simplified = nbt.simplify(msg)
  const json = JSON.stringify(simplified, (key, val) => {
    if (key === 'id' && Array.isArray(val)) return uuidFromIntArray(val)
    return val
  })
  return json
}
console.log(fromNotch(processNbtMessage(msg)).toAnsi())
console.log(fromNotch(nbt.simplify(msg).extra).toAnsi())
async function nbtChat() {

  const { parsed, type } = await nbt.parse(msg)
  console.log(parsed)
}
//nbtChat()
/*
async function main(file) {
  const buffer = fs.readFileSync(file)
  const { parsed, type } = await nbt.parse(buffer)
  console.log('JSON serialized', JSON.stringify(parsed, null, 2))
  fs.createWriteStream('bigtest.nbt').write(nbt.writeUncompressed(parsed, type)) // Write it back 
}
main('bigtest.nbt')
*/
