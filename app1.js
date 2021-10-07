let greet = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Welcome")
    }, 2000)
}).then(value => {
    console.log(value)
    return "Welcome Again"
}).then(newValue => {
    console.log(newValue)
})