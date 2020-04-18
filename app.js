// Elastic APM
// Add this to the VERY top of the first 
// file loaded in your app
var apm = require('elastic-apm-node').start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, 
  // and space
  serviceName: 'nodejs',

  // Use if APM Server requires a token
  // secretToken: '<apm_token>',

  // Set custom APM Server URL
  // Default: http://localhost:8200
  serverUrl: 'http://apmserver:8200'
})

// Express 'Hello World'
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
