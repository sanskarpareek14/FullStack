var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

var chores = []

var deleteItem = (value) => {
    const index = chores.indexOf(value)
    chores.splice(index, 1)
    console.log(chores)
}


const callbackFunction = (mystery) => {
    const inputvalue = input.value
    if (chores.includes(inputvalue)) {
        console.log('already exists')
    } else {
        chores.push(inputvalue)
        const element = document.createElement('li')
        const textnode = document.createTextNode(inputvalue)
        element.appendChild(textnode)
        list.appendChild(element)
        element.addEventListener('click', (event) => {
            deleteItem(event.target.innerHTML)
        })

    }
}
button.addEventListener('click', callbackFunction)