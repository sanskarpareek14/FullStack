const Input = document.querySelector('ul')
const Button = document.querySelector('button')
const getText = document.querySelector('input')
const parent = document.querySelector('div.grid')
const getData = async (item) => {
    console.log(item)
    const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=Pizza=${item}`
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    const recipes = data.hits
    recipes.forEach(item => {
        const { recipe } = item
        console.log(recipe)
        const { label, image, source, calories } = recipe
        console.log(label, image, source, calories)
        const template = `<img class="card__image" src="${image}" />
        <div class="card__data">
            <div class="card__info">
                <h2>${label}</h2>
                <p>From ${source}</p>
            </div>
            <h3 class="card__price">${calories.toFixed(2)}</h3>
            <button class="card__add">+</button>
        </div>`
        const newCard = document.createElement('article')
        newCard.setAttribute('class', 'card')
        newCard.setAttribute('style', 'margin-bottom:20px')
        newCard.innerHTML = template
        parent.appendChild(newCard)
    })

}



Button.addEventListener('click', (e) => {
    getData(getText.value)
})

