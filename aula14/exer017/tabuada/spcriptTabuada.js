function enviar(){
    var numero = document.querySelector("input#txtnumero")
    var res = document.querySelector("div#resposta") //para visualizar direto no HTML do programa
    var tab = document.getElementById("selcttabuada") //para interação com a tabela de respostas

    var numeroc = Number(numero.value)
    
    if(numero.value.length != 0 ){
        //res.innerHTML = "Resposta <br>"
        tab.innerHTML = ""
        for(c = 0; c <=10; c++){
            /*resposta = numeroc*c                                  para aparecer sem ser no elemento lista/select HTML
            res.innerHTML += `${c} x ${numeroc} = ${resposta} <br>`*/

            var item = document.createElement("option") //para criar opções dentro da da tabela/select
            item.text = `${c} x ${numeroc} = ${numeroc*c}` // conta para aparecer dentro da tabela/select
            item.value = `tab${c}` //para poder selecionar os resultados dentro da tabela (usado mais em outras linguagens de programação)
            tab.appendChild(item) //para o resultado paracer na tabela/select

        }
    }else{
        window.alert("erro digite um numero")
    }
}