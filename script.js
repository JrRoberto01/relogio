function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

function mudarInfos(){
    /*Horas*/
    let horas = new Date();
    let hora = addZero(horas.getHours());
    let minuto = addZero(horas.getMinutes());
    let segundo = addZero(horas.getSeconds());
    let time = hora + ":" + minuto + ":" + segundo;
    document.getElementById('relogioDigital').innerText = time;
    /*Data*/
    let dia = addZero(horas.getDay());
    let mes = addZero(horas.getMonth());
    let ano = addZero(horas.getFullYear());
    let dataCompleta = dia + "/" + mes + "/" + ano;
    document.getElementById('dataAtual').innerText = dataCompleta
}
/*Mudar Estilo*/
function mudarTema(){
    let bodyTag = document.body;
    bodyTag.classList.add('nightModeBody');
}
setInterval(mudarInfos, 1000);