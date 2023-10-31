/*
    Function / Funções
    
    Function padrão -> function() {}
    Arrow function -> () => {}

    não escrevemos "function"
    Além disso, usamos o sinal "=>" para criá-la
    O que lembra uma flecha, fazendo jua ao nome "Arrow function".
*/

function sayMyName(name) {
    return `Seu nome é: ${name}`
}

const sayMyName2= (name) => `Seu nome é: ${name}`

console.log(sayMyName('Caio'))
console.log(sayMyName('Carlos'))