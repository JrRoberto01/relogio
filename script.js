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
    let dia = addZero(horas.getDay() - 2);
    let mes = addZero(horas.getMonth() + 1);
    let ano = addZero(horas.getFullYear());
    let dataCompleta = dia + "/" + mes + "/" + ano;
    document.getElementById('dataAtual').innerText = dataCompleta
}
/*Mudar Estilo*/
function mudarTema(){
    let body_tag = document.body;
    let text_h1 = document.getElementById('relogioDigital');
    let text_h2 = document.getElementById('dataAtual');
    text_h1.classList.toggle('nightModeBody');
    text_h2.classList.toggle('nightModeBody');
    body_tag.classList.toggle('nightModeBody');
}
setInterval(mudarInfos, 0);