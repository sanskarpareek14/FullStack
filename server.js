const express = require('express')
const PORT = 3000
const app = express()
app.use(express.json())

const token = "TOP_SECRET"
let product = [{ "name": 'i phone12 case', price: '999' }, { name: 'iphone 13 case', price: '1199' }, { name: 'iphone 13 pro case', price: '1499' }]

//VALIDATORS
const validator = ((req, res, next) => {
    const { name, price } = req.body
    if (!name || !price) res.json({ error: 'Validation failed' })
    else next()
})
const isAuthorised = ((req, res, next) => {
    if (req.headers.authorization === token) next()
    else res.send({ message: "Unauthorised" })
})
//---------------------------------------PUBLIC ROUTES--------------------------------
// GET route
// Send all products
app.get('/products', (req, res) => {
    res.json(product)
})

// -------------------------------------PRIVATE ROUTE ------------------------------------------
app.post('/products/add', isAuthorised, validator, (req, res) => {
    const { name, price } = req.body
    product.push({
        name,
        price,
    })
    res.send('product added')
})
// --------------------------------- AUTHENTICATION ROUTE---------------------------------
app.post('/auth', (req, res) => {
    const { email, password } = req.body
    if (email === 'pareek081@gmail.com' && password === 'Pareek@123') res.send({ token })
    else res.send({ message: 'Unauthorised' })
})
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})