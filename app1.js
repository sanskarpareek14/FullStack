let response = fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => {
    let parsedData = res.json()
    console.log(parsedData)
    return (parsedData)
}).then(data => {
    console.log(data)
})