const database = require('../database/db')
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

/*
  ROUTE: http://localhost:3001/categories/all
  METHOD:GET
*/
router.get('/all', (req, res) => {
    try {
        res.status(200).json({
            categories: database.categories,
            message: "Successfully fetched categores",
            status: "SUCCESS"
        })
    } catch (error) {
        res.status(200).json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }
})
/*
  ROUTE: http://localhost:3001/categories/add
  METHOD:POST
*/
router.post('/add', (req, res) => {
    const { Name } = req.body
    let newCategory = {
        Name,
        id: uuidv4()
    }
    try {
        let includes = database.categories.find(item => item.Name == Name)
        if (!includes) { database.categories.push(newCategory) }
        else console.log('Already exist')
        res.status(200).json({
            categories: database.categories,
            message: "Successfully added category",
            status: "SUCCESS"
        })
    } catch (error) {
        res.status(200).json({
            categories: category,
            message: error.message,
            status: "FAILED"
        })
    }
})

/*
  ROUTE: http://localhost:3001/categories/delete
  METHOD:DELETE
*/
router.delete('/delete/:id', (req, res) => {
    try {
        const { id } = req.params
        // let element = database.categories.find(item => item.id == id)
        // const index = database.categories.indexOf(element)
        // database.categories.splice(index, 1)
        const newCategories = database.categories.filter(item => item.id !== id)
        database.categories = newCategories

        res.json({
            categories: database.categories,
            message: "Successfully added category",
            status: "SUCCESS"
        })
    } catch (error) {
        res.json({
            categories: category,
            message: error.message,
            status: "FAILED"
        })
    }
})
/*
  ROUTE: http://localhost:3001/categories/update/:id
  METHOD:PUT
*/

module.exports = router