const express = require('express')
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('GET')
})
app.post('/', (req, res) => {
    res.send('POST')
})
app.put('/', (req, res) => {
    res.send('PUT')
})
app.delete('/', (req, res) => {
    res.send('DELETE')
})
app.patch('/', (req, res) => {
    res.send('PATCH')
})
app.get('/login', (req, res) => {
    res.send('login form')
})
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})