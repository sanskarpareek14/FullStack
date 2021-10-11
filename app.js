const fs = require('fs')

// fs.writeFile('./test.txt', 'New stuff inside', (error) => {
//     if (error) console.log(error)
// })
fs.writeFile('./test.txt', `Append me  ${fs.readFileSync('./test.txt', 'utf8')}`, (error) => {
    if (error) console.log(error)
})
