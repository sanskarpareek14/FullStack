const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const add = document.querySelector('#Add')
const subtract = document.querySelector('#Subtract')
const multiply = document.querySelector('#Multiply')
const Result = document.querySelector('.result')

const sum = () => {
    const result = parseInt(a.value) + parseInt(b.value)
    Result.innerHTML = result
}
const Multiply = () => {
    const result = parseInt(a.value) * parseInt(b.value)
    Result.innerHTML = result
}

const calculate = (event, operation) => {
    // if (operation == 'add') {
    //     console.log('adding')
    // } else if (operation == 'multiply') {
    //     console.log('multiplying')
    // }
    console.log(event.target)
    switch (operation) {
        case "add":
            Result.innerHTML = parseInt(a.value) + parseInt(b.value)
            break
        case "multiply":
            Result.innerHTML = parseInt(a.value) * parseInt(b.value)
            break
        case "subtract":
            Result.innerHTML = parseInt(a.value) - parseInt(b.value)
            break
        default:
            Result.innerHTML = "Not a valid operation"
    }
}
add.addEventListener('click', (event) => {
    calculate(event, 'add')
})
multiply.addEventListener('click', (event) => {
    calculate(event, 'multiply')
})
subtract.addEventListener('click', (event) => {
    calculate(event, 'subtract')
})