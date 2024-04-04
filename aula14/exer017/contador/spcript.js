function contar(){
    var inicio = window.document.querySelector("input#txtinicio")
    var fim = window.document.querySelector("input#txtfim")
    var passo = window.document.querySelector("input#txtpasso")
    var res = document.querySelector("div#res")

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 && passo.value == 0){
        window.alert("Que vc ta fazendo")
        }else{
            res.innerHTML = "Contando: "
            finicio = Number(inicio.value)
            ffim = Number(fim.value)
            fpasso = Number(passo.value)
            if (fpasso <= 0){
                window.alert("Que vc ta fazendo vamos usar 1")
                fpasso = 1
            }
            if(finicio < ffim){
                //somando
                for(finicio; finicio <= ffim; finicio += fpasso){
                    res.innerHTML += `${finicio} `
                }
            }else{
                //subtraindo
                for(finicio; finicio >= ffim; finicio -= fpasso){
                    res.innerHTML += `${finicio} `
                }
            }
        }
    }