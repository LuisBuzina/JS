function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if(formularioano.value.length == 0 || formularioano.value > ano){ //colocar o .value para poder puxar o valor da elemento não todas as funções dele
        window.alert("Erro data invalida")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(formularioano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = "masculino"
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'menino.png')
            }else if(idade < 18){
                //adolescente
                img.setAttribute('src', "adolescentem.png")
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', "homem.png")
            }else{
                //idoso
                img.setAttribute('src', "idoso.png")
            }
        }else if(fsex[1].checked){
            genero = "feminino"
            if(idade >= 0 && idade < 10){
                //adolescente
                img.setAttribute('src', "menina.png")
            }else if(idade < 18){
                //adolescente
                img.setAttribute('src', "adolescentef.png")
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', "mulher.png")
            }else{
                //idoso
                img.setAttribute('src', "idosa.png")
            }
        }
        res.innerHTML = `Seu sexo é ${genero} com ${idade} anos`
        res.style.textAlign = "center"
        res.appendChild(img) //para aparecer imagem no html
    }

}