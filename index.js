const express = require('express')

const app = express()
const PORT = 4000 || process.env.PORT

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

app.get('/img/:text', (req, res) => {
  res.send(req.params.text)
})

// Export the Express API
module.exports = app
