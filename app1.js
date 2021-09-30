var body = document.querySelector('body')
var button = document.querySelector('button')


const callbackFunction = (mystery) => {
    body.classList.toggle('dark')
}
button.addEventListener('click', callbackFunction)