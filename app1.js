
// fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
//     .then(data => {
//         console.log(data)
//         data.forEach(user => {
//             console.log(data)
//         })
//     })
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(response)

    const data = await response.json()
    console.log(data)
}

fetchData()