var Body = document.querySelector('body')
var Input = document.querySelectorAll('input')[0]
var add_button = document.querySelector('.entity_codes')
var button = document.querySelectorAll('button')[0]
var list = document.querySelector('.items')
var count = document.querySelector('#item_count')
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
const callbackFunction = () => {
    const inputvalue = Input.value
    if (chores.includes(inputvalue)) {
        console.log('already exist')
    } else {
        chores.push(inputvalue)
        const element = document.createElement('li')
        const delete_button = document.createElement('div')
        // const hamburger_button = document.createElement('div')
        element.style = "display:flex;align-items: center; justify-content: space-between; margin: 6px 8px 10px 2px;padding: 5px 5px 5px 10px;background-color: white;height: 35px;border-radius: 5px;"
        delete_button.innerHTML = "&#x2715;"
        delete_button.style = "cursor:pointer; color:hover:crimson;"
        // hamburger_button.innerHTML = "&#9776";
        // hamburger_button.style = "cursor:pointer; margin-left: 4px;"
        const textnode = document.createTextNode(inputvalue)
        delete_button.addEventListener('click', (event) => {
            element.remove(event.target)
            chores.pop(chores.indexOf(event.target.value))
            count.innerHTML = `${chores.length} items`
        })
        element.appendChild(textnode)
        element.appendChild(delete_button)
        // element.appendChild(hamburger_button)
        list.appendChild(element)
        count.innerHTML = `${chores.length} items`
    }
}
button.addEventListener('click', add_dark)
add_button.addEventListener('click', callbackFunction)
