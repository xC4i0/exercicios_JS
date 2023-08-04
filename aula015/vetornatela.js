let valores = [4, 5, 67, 8, 32, 4]

// console.log(valores)

/* 

for(let pos =0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // Forma normal como repetição!
}   

*/ 


for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)  // Forma simplificada
}

