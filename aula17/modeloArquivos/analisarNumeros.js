    let numero = document.querySelector("input#txtnumeros")
    let res = document.querySelector("div#resposta")
    let valores = []
    
    let tabela = document.querySelector("select#tabela")

        //verifica se o valor é maior que zero e menor que 100 retorna true se nao estiver (resume um if e else) 
    function isNumero(n){
        if(Number(n) <= 0 || Number(n) > 100){
            return false // se for menor/igual a zero verdadeiro E maior que 100 
            // retorna para o adicionar() que o valor esta abaixo de 1 e acima de 100
        }else{
            // retorna para adicionar() que o valor está entre 1 e 100
            return true
        }
    }
        //verifica se o valor já está na tabela e retorna true se nao estiver (resume um if e else) 
    function inTabela(n, l){
        if (l.indexOf(Number(n)) != -1){
            return true
        }else{
            return false
        }
    }
    
    function adicionar(){
        if(isNumero(numero.value) && !inTabela(numero.value, valores)){ //usa valor de outra function pra validar as informaçoes
        // isNumero para verificar se o valor é um numero / inTabela verifica se existem o valor em alguma lista

        valores.push(Number(numero.value)) // valores vai recerber no array os numeros que foram adicionados pelo input
       
        let item = document.createElement("option")
            item.text = `Numero ${numero.value} adicionado`
            item.value = `tab${numero.value}`
            tabela.appendChild(item)
        }else{
            window.alert("Erro")
        }
        numero.value = "" // para deixar em branco o input de texto 
        numero.focus() // para deixar já clicado/foco para o proximo valor
       /* Verifica se tem valor inserido, se é menor ou igual a zero e se é maior que 100 
        if(numero.value.length == 0 || numero.value <= 0 || numero.value > 100){
            window.alert("Erro Dados Incorretos")
        }
        else{
            let item = document.createElement("option")
            item.text = `Numero ${num} adicionado`
            item.value = `tab${num}`
            tabela.appendChild(item)

        } */
    }

    function enviar(){
        if(valores.length == 0){
            window.alert("Adicione valores")
        }else{
            let total = valores.length
            let maior = valores[0] //o maior valor começa na primeira casa pois nao tem outra valor maior por ser o inicial
            let menor = valores[0] //o menor valor começa na primeira casa pois nao tem outra valor menor por ser o inicial
            let soma = 0
            let media = 0

            for(let pos in valores){
                soma += valores[pos]
                if (valores[pos] > maior){ //compara o valor da primeira posição com a proximas posições e guarda na varial maior e vai comparando entre elas
                    maior = valores[pos]
                }
                if (valores[pos] < menor){ //compara o valor da primeira posição com a proximas posições e guarda na varial menor e vai comparando entre elas
                    menor = valores[pos]
                }
            }
            media = soma / total

            res.innerHTML = ""
            res.innerHTML += `<p> Ao todo temos total de ${total} de numeros </p>`
            res.innerHTML += `<p>O maior numero é ${maior} </p>`
            res.innerHTML += `<p>O menor numero é ${menor} </p>`
            res.innerHTML += `<p>A soma de todos os numeros é ${soma} </p>`
            res.innerHTML += `<p>A media de todos os numeros é ${media} </p>`
        }
    }