let response = fetch('https://jsonplaceholder.typicode.com/todos/10').then(data => {
    return data.json()
}).then(content => {
    console.log(content)
})