const mc = require('minecraft-protocol');
async function ping() {
  const server = await mc.ping({host:"kaboom.pw",port:"25565"})
 // console.log(await mc.ping({host:"kaboom.pw",port:"25565"}))
  console.log(server)
}
ping()
