const Input = document.querySelector('input')
const Button = document.querySelector('button')
const list = document.querySelector('div')
const getData = async (item) => {
    console.log(item)
    const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=Pizza=${item}`
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.hits)
}



Button.addEventListener('click', (e) => {
    getData(Input.value)
})