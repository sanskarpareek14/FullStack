const path = require('path')
// console.log(path)

console.log(path.resolve('./app.js'))

console.log(path.relative('C:', "./temp/util.js"))

console.log(path.dirname('./temp/app.js'))
console.log(path.join(__dirname, 'app.js'))
console.log(__dirname)