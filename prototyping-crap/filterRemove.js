/*const playlists = [
  {
    "id" : "1",
    "owner_id" : "2",
    "song_ids" : [ "8", "32"]
  },
  {
    "id" : "2",
    "owner_id" : "3",
    "song_ids" : ["6", "8","11" ]
  }
];*/
const fs = require('fs');
var data = require("./data.json");
const e = data.splice('e', 1)
const removePlayerById = (plists, text) =>
plists.filter(player => player.text !== text);
const result = removePlayerById(data, 2);
console.log(result)
//  console.log(playerId)
//}
//remove()
/*
const fs = require("fs");

var data = fs.readFileSync("data.json");
var myObject = JSON.parse(data);

let newData = {
  text: "sus"
}
myObject.push(newData);
var newData2 = JSON.stringify(myObject);
fs.rmSync("./data.json");
fs.writeFile("data2.json", newData2, (err) => {
  if (err) throw err;
  console.log("New data added");
});
fs.rename('data2.json', 'data.json', (err) => {
  if (err) throw err;
//  console.log('Rename complete!');
});

*/
