/*
    Estrutura de Repetição - LOOP
        -FOR IN
*/

const users = { name: 'Caio', age: 20, street: "Rua da Lagoa"}


/*
console.log(users.name) // Os dois são iguais

users['name'] // Os dois são iguais
*/

 for (const key in users) {
    console.log(key + ": " + users[key])
 }