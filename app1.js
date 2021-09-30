function greet(Name = "Chris", age = 45) {
    console.log(Name, age)
}
greet()


add(a = 0, b = 0) => {
    var sum = a + b
    return sum
}

var add = (a = 0, b = 0) => {
    var sum = a + b
    return sum
}
console.log(add(10, 20))

var greet = function (Name = "Chris", age = "48") {
    console.log("Name is " + Name + "\nAge is " + age)
}
greet()



