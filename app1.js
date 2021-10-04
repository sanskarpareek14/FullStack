let car = {
    Name: "C Class",
    Manufacturer: "Mercedes",
    print: () => {
        console.log(this)
        console.log(`${car.Name} was created by ${car.Manufacturer}`)
    }
}

console.log(Object)

console.log(car.hasOwnProperty('Manufacturer'))