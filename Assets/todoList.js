var Body = document.querySelector('body')
var Input = document.querySelectorAll('input')[0]
var add_button = document.querySelector('.entity_codes')
var button = document.querySelectorAll('button')[0]
var list = document.querySelector('.items')
var t = true;
const add_dark = () => {
    if (t) {
        Body.style = "background-color: black;"
        t = false;
    }
    else {
        Body.style = "background-color: white;"
        t = true;
    }
}
var chores = []
function deleteItem(value) {
    const index = element.indexOf(value)
    element.splice(index, 1)
}
const callbackFunction = () => {
    const inputvalue = Input.value
    if (chores.includes(inputvalue)) {
        console.log('already exist')
    } else {
        chores.push(inputvalue)
        const element = document.createElement('li')
        const delete_button = document.createElement('div')
        element.style = "display:flex;align-items: center; justify-content: space-between; margin: 6px 8px 10px 2px;padding: 5px 5px 5px 10px;background-color: white;height: 35px;border-radius: 5px;"
        delete_button.innerHTML = "&#x2715;"
        delete_button.style = "cursor:pointer;"
        const textnode = document.createTextNode(inputvalue)
        element.appendChild(textnode)
        element.appendChild(delete_button)
        list.appendChild(element)
        delete_button.addEventListener('click', (event) => {
            deleteItem(event.target.innerHTML)
        })
    }
}
button.addEventListener('click', add_dark)
add_button.addEventListener('click', callbackFunction)
