var num = window.document.getElementById('inum')
var fim = window.document.getElementById('ifim')
var passo = window.document.getElementById('ipasso')
var res = window.document.getElementById('res')


function calcular() {
    if (num.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = `Contando: `
        let inicio = Number(num.value)
        let final = Number(fim.value)
        let quantos = Number(passo.value)

        for (var c = inicio; c <= final; c += quantos) {
            res.innerHTML += `${c} `
        }
    }
}