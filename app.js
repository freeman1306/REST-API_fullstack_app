const express = require('express')
const path = require('path')


// Create server, can use its methods
const app = express()

// Open server on port
app.listen(4500, console.log('Server has been started'))

// Specify static folder
app.use(express.static(path.resolve(__dirname, 'client')))

// Say for all get queries send html from client folder
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})