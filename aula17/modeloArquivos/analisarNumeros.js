function enviar(){
    var numero = document.querySelector("input#txtnumeros")
    var n = []
    n = n.push(numero.value)
    var res = document.querySelector("div#resposta")

    if(numero.value.length == 0){
        window.alert("Digite um numero")
    }else{
        
    }
    

    //res.innerHTML = `Resposta ${numero.value} <br>`

}