const express = require('express')
const path = require('path')
const {v4} = require('uuid')
// Create server, can use its methods
const app = express()


// our DB
let CONTACTS = [
    {id: v4(), name: 'Vladilen', value: '+7-921-100-20-30', marked: false}
]


app.use(express.json())


// Open server on port
app.listen(4500, console.log('Server has been started'))

// Specify static folder
app.use(express.static(path.resolve(__dirname, 'client')))

// GET
app.get('/api/contacts', (req, res) => {
    setTimeout(() => {
        res.status(200).json(CONTACTS)
   }, 1000)
})


// POST
app.post('/api/contacts', (req, res) => {
   const contact = {...req.body, id: v4(), marked: false}
    CONTACTS.push(contact)
    res.status(201).json(contact)
})


// DELETE
app.delete('/api/contacts/:id', (req, res) => {
    CONTACTS = CONTACTS.filter(c => c.id !== req.params.id)
    res.status(200).json({message: 'контакт удален'})
})


// PUT
app.put('/api/contacts/:id', (req, res) => { 
    const idx = CONTACTS.findIndex(c => c.id === req.params.id)
    CONTACTS[idx] = req.body
    res.json(CONTACTS[idx])
})



// Say for all get queries send html from client folder
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})