let num = [5, 6, 2, 8, 2, 1, 5]

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeira valor do vetor é ${num[0]}`)  
let pos = num.indexOf(23)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 6 está na posição ${pos}`)
}
