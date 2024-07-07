const fs = require('fs/promises');
const path = require('path');
const blacklist = require(path.join(__dirname, 'blacklist.json'));

for (const player of blacklist.players) {
    console.log('whos blacklisted?',[player]);
}
