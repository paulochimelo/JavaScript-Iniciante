function getInteiroaleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 

while (opcao != -1){
    opcao = getInteiroaleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Ate a proxima')