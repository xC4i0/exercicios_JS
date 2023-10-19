function generateNumber() {
    const min = Math.ceil(document.getElementById("n1").value)
    const max = Math.floor(document.getElementById("n2").value)


    if ( min >= max ) {
        alert("O valor minimo tem que ser MENOR que o valor máximo")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min

        alert(result)
    }
}
    