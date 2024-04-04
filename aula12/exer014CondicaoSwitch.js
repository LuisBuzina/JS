//condicao multipla (switch)
var dia = new Date()
var diaSemana = dia.getDay()

//console.log(diaSemana)
//diaSemana = 8
switch (diaSemana){
    case 0:
        console.log("Domingo")
        break //caso esqueca vai executar tudo depois
    case 1: 
        console.log("Segunda")
        break //caso esqueca vai executar tudo depois
    case 2:
        console.log("Terça")
        break //caso esqueca vai executar tudo depois
    case 3:
        console.log("Quarta")
        break //caso esqueca vai executar tudo depois
    case 4:
        console.log("Quinta")
        break //caso esqueca vai executar tudo depois
    case 5:
        console.log("Sexta")
        break //caso esqueca vai executar tudo depois
    case 6:
        console.log("Sabado")
        break //caso esqueca vai executar tudo depois
    default:
        console.log("Erro: Dia invalido")
        break //caso esqueca vai executar tudo depois
}

console.log("AAAAAAAAAAAAAAA")