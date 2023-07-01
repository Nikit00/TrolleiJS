function fuja(){
    var botaoNao = document.getElementById("nao")

    var xJanela = window.innerWidth;
    var yJanela = window.innerHeight;

    var maxX = xJanela - botaoNao.offsetWidth;
    var maxY = yJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX ) ;
    var aleatorioY = Math.floor(Math.random() * maxY );

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}