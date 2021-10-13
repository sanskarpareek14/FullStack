// const http = require('http')
// const fs = require('fs')
// const path = require('path')
// const { url } = require('inspector')
// console.log(http)

// const server = http.createServer((request, response) => {
//     // console.log(request.url)
//     // console.log(request.method)
//     // const path = request.url
//     // const markup = fs.readFileSync(path.resolve('./index.html'))
//     // response.write(markup)
//     // response.end()
//     const { url } = request
//     if (url == '/login') {
//         response.write(`<h1>Login</h1>`)
//     }
//     if (url == '/signup') {
//         response.write(`<h1>Signup</h1>`)
//     }
// })

// server.listen(3000, () => {
//     console.log(`Server runs at port ${3000}`)
// })
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req)
})

app.listen(3000, () => {
    console.log('Server listening at port 3000')
})