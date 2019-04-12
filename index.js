const express = require('express') // framework / web server
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .get('/', (req, res) => res.send('Hello World'))

    .listen(PORT, () => console.log(`Listening on ${PORT}`)) // zeigt port