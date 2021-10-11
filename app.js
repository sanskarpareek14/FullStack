const fs = require('fs')

fs.writeFile('./test.txt', 'New stuff inside', (error, data) => {
    if (error) console.log(error)
})