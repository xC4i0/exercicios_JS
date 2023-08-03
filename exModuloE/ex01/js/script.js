var num = window.document.getElementById('inum')
var fim = window.document.getElementById('ifim')
var passo = window.document.getElementById('ipasso')
var res = window.document.getElementById('res')


function calcular() {
    if (num.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossivel Contar!'
    } else {
        res.innerHTML = `Contando: <br>`
        let inicio = Number(num.value)
        let final = Number(fim.value)
        let quantos = Number(passo.value)
        if (quantos <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            quantos = 1
        }
        if (inicio < final) {
            // Contagem Crescente
            for (var c = inicio; c <= final; c += quantos) {
                res.innerHTML += ` ${c}, \u{1F449}`
            }
        } else {
            // Contagem Regressiva
            for (let c = inicio; c >= final; c -= quantos) {
                res.innerHTML += `${c} \u{1F449}`
            }

        }
        res.innerHTML += `\u{1F3C1}`

    }
}