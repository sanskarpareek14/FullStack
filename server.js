const express = require('express')
const PORT = 3000
const app = express()

const isVerified = (req, res, next) => {
    if (req.headers.admin === 'true') next()
    else res.send('UNAUTHORISED')
}

app.get('/public', (req, res) => {
    console.log(req.headers)
    res.send('I am a public route')
})
app.get('/private', isVerified, (req, res) => {
    res.send('I am a admin route')
})


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})