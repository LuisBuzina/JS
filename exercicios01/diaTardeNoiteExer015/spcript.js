function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora é ${hora} horas.`

    if(hora >= 0 && hora <12){
        //bom dia
        img.src = "dia.png"
        document.body.style.background = "#95afd0"
    }else if(hora >=12 && hora < 18){
        //boa tarde
        img.src = "tarde.png"
        document.body.style.background = "#e95816"
    }else{
        //boa noite
        document.body.style.background = "#3a4a57"
        img.src = "noite.png"
    }
}