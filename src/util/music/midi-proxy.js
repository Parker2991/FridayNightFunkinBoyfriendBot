function midiproxy () {
const http = require('http')
const { URLSearchParams, parse } = require('url')
const request = require('request')

const server = http.createServer((req, res) => {
  const url = parse(req.url)
  const params = new URLSearchParams(url.search)
  const uri = params.get('uri')

  if (!uri) {
    res.end('SyntaxError: No URI')
    return
  }

  try {
    request({ uri })
    .on('error', (err) => res.end(err.toString()))
    .pipe(res)
  } catch (error) {
    res.end(error.toString())
  }
})

server.listen(8080)
}

module.exports = midiproxy
