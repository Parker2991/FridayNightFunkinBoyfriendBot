const { request } = require("undici");
// https://en.wikipedia.org/w/api.php
async function sus () {
   const query = new URLSearchParams("sus");
   const wikiResult = await request(`https://en.wikipedia.org/wiki/sus`);
   const result = await wikiResult.body;
   console.log((await result.json()))
}
sus()
