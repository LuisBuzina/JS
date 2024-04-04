let num = [5,6,4,8,7,3]
num.sort() //organiza a ordem dos elementos
num.push(2) //adciono o elemento no final da ordem
console.log(num)
console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(2) //procura se existe o numero em alguma posição

if(pos == -1){
    console.log("Erro não existe esse numero")
}else{
    console.log(`Deu certo ${pos}`) //mostra em qual posição está o numero
}

for(var posicao = 0; num.length > posicao; posicao++){
    console.log(`O numero que está na posição ${posicao} é ${num[posicao]}`) //mostra de forma automatica o conteudo de cada elemento usando estrutura de repetição
}

console.log("------------------------------------------------------------------")

for(let posicao in num){ //versão simplificada de cada repetição para variaveis compostas/array
    console.log(num[posicao])
}