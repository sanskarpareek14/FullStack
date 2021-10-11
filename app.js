const fs = require('fs')

// fs.readFile('./test.txt', 'utf8', (error, data) => {
//     if (error) console.log(error)
//     else console.log(data)
// })
console.log(fs.readFileSync('./test.txt', 'utf8'))
console.log('I am a random log')