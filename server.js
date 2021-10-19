const express = require('express')
const database = require('./database/db')
PORT = 3001
const app = express()
app.use(express.json())
const categoryRoutes = require('./routes/categoryRoutes')
const ProductRoutes = require('./routes/ProductRoutes')
app.use('/categories', categoryRoutes)
app.use('/products', ProductRoutes)
// console.log(categoryRoutes.stack)

app.get('/', (req, res) => {
    try {
        console.log(document)
    }
    catch (error) {
        res.status(200).send(error.message)
    }
})


app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`)
})