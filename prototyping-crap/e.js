const https = require('node:https');

https.get('https://encrypted.google.com/', (res) => {
  console.log('statusCode:', res.statusCode);
//  console.log('headers:', res.headers);
   console.log((res.complete)) 
 let data;
  res.on('data', (d) => {
   process.stdout.write(d);
//    if (data === undefined) data = chunk;
  //  else data += chunk;
//    console.log(data);
  });

}).on('error', (e) => {
  console.error(e);
}); 
