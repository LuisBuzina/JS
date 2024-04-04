function contar(){
    var inicio = window.document.querySelector("input#txtinicio")
    var fim = window.document.querySelector("input#txtfim")
    var passo = window.document.querySelector("input#txtpasso")
    var res = document.querySelector("div#resposta")

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 && passo.value == 0){ //com o length apenas usado com o querySelector
        window.alert("Erro falta dados")
        }else{
            res.innerHTML = "Contando: "
            finicio = Number(inicio.value)
            ffim = Number(fim.value)
            fpasso = Number(passo.value)

        }if(fpasso == 0){
            fpasso = 1
        }if(finicio < ffim){

                for(finicio; finicio <= ffim; finicio += fpasso ){
                    res.innerHTML += `${finicio} `
                }
            }else{
                for(finicio; finicio >= ffim; finicio -= fpasso){
                    res.innerHTML += `${finicio} `
                }
            }
}

/*function contar(){
    var inicio = window.document.querySelector("input#txtinicio")
    var fim = window.document.querySelector("input#txtfim")
    var passo = window.document.querySelector("input#txtpasso")
    var res = document.querySelector("div#resposta")

    if(inicio.value.length == 0 || fim.value.length == 0){
        window.alert("Teste")
    }else{
        window.alert("deu certo")
    }*/
