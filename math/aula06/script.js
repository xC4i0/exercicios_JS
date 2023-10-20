/*
    1- INICIALIZAÇÃO -> Criar uma variável e colocar um valor incial pra ela
    2- CONDIÇÃO -> Enquanto for true, o laço continuará iterando.
                   Ele irá verificar antes de cada iteração
    3- EXPRESSÃO FINAL -> O que irá ocorrer a cade vez que o nosso laço der uma volta

    for ([inicialização]; [condição]; [Expressão final]) {
        Seu código aqui
    }
*/


// for (let i = 0; i <= 15; i++) {
//     console.log(i)
// }

const user = ["Maria", "Aline", "Jõao", "Lucas", "Caio", "Maria", "Aline", "Jõao", "Lucas", "Caio"]

for (let i = 0; i < user.length; i++) {
    console.log(user[i])
}