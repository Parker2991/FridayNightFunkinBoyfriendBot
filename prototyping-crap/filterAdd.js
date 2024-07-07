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

