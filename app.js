var heading = document.getElementById('heading')
var list = document.querySelector('ul')
// console.log(list)
var arr = ['Go to the GYM', 'drink protien']
arr.push('Complete Assignment')
for (var i = 0; i < arr.length; i++) {
    var element = document.createElement('li')
    var textNode = document.createTextNode(arr[i])
    element.appendChild(textNode)
    list.appendChild(element)
}