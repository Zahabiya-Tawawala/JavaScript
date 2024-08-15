let a = document.querySelector('.num-a')
let b = document.querySelector('.num-b')
let add = document.querySelector('.add')
let output = document.querySelector('.output')

// function addition() {
//     let sum = parseInt(a.value) + parseInt(b.value)
//     output.innerHTML = sum
// }

// add.addEventListener('click', function() {
//     let sum = parseInt(a.value) + parseInt(b.value)
//     output.innerHTML = `Output: ${sum}`
// })

add.onclick = (a , b) => {
    output.innerHTML = `Output: ${parseInt(a.value) + parseInt(b.value)}`
}