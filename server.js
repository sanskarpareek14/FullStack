const express = require('express')
const PORT = 3000
const app = express()
const data = [{ names: 'Sanskar' }, { names: 'Avinash' }, { names: 'Yashika' }]
app.get('/Login', (req, res) => {
    res.send('Login')
})
app.get('/Signup', (req, res) => {
    res.send('SignUP')
})
app.get('/getNames', (req, res) => {
    res.send(data)
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})