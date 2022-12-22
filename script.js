function carregar() {
    var msg = window.document.getElementById("mensagem")
    var img = window.document.getElementById("imagem")
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    msg.innerHTML = (`Agora São ${hora} horas é ${minuto} minutos.`)
    if(hora<12){
       img = img.src="img-manhã.jpg"
       window.document.body.style.background="#d8d282"
    } else if(hora<18){
       img = img.src="img-tarde.jpg"
       window.document.body.style.background="#93adbc"
    } else {
       img = img.src="img-noite.jpg"
       window.document.body.style.background="#2e4766"
    }
}
