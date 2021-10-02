var arr = [1, 2, 3, 4, 5, 6, 7, 8]

var new_arr = arr.filter((element, index) => {
    if (element > 2) {
        return true
    }
})
console.log(new_arr)
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         new_arr.push(arr[i])
//     }
// }
// console.log(new_arr)