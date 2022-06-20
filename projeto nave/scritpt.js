var jog,dirxJ,diryJ,velJ,pjx,pjy;
var ptjx,ptjy,veltj;
var velB;
var jogo = true;
var frames;
var tamTelaW,tamTelaH;
var freqCriaBomba;
var iec,iea,isom;
var vidaPlaneta,barraPlaneta;
var contBombas,painelContBombas;
var tmpCriaIni;
var telaMsg;

const teme = new Audio();

teme.src="music 2.mp3";

const bomb = new Audio();

bomb.src="bomba.wav";

function teclaDw(){
    var tecla = event.keyCode;
    if(tecla==38){//cima
        diryJ=-1;
    }else if(tecla==40){//baixo
        diryJ=1;
    }
    if(tecla==39){//direita
        dirxJ=1;
    }else if(tecla==37){//esquerda
        dirxJ=-1;
    }
    if(tecla==32){//tiro/espaço
        atiraJ(pjx+17,pjy);
    }
}

function teclaUp(){
    var tecla=event.keyCode;
    if((tecla==38)||(tecla==40)){
        diryJ=0;
    }
    if((tecla==39)||(tecla==37)){
        dirxJ=0;
    }
}

function criaBomba(){
    if(jogo){
        var x=Math.random()*tamTelaW;
        var y=0;
        var bomba=document.createElement("div");
        var att1=document.createAttribute("class");
        var att2=document.createAttribute("style");
        att1.value="bomba";
        att2.value="top:"+y+"px;left:"+x+"px;";
        bomba.setAttributeNode(att1)
        bomba.setAttributeNode(att2)
        document.body.appendChild(bomba);
        contBombas--;
        painelContBombas.innerHTML="Contagem de Bombas: " + contBombas;
    }
}

function controlaBomba(){
    var bombas=document.getElementsByClassName("bomba")
    var tam=bombas.length;
    for(var i=0;i<tam;i++){
        if(bombas[i]){
            var pi=bombas[i].offsetTop;
            pi+=velB;
            bombas[i].style.top=pi+"px";
            if(pi>tamTelaH){
                vidaPlaneta-=10;
                criaExplosaoChao(bombas[i].offsetLeft);
                //document.body.removeChild(bombas[i]);
                bombas[i].remove();
            }
        }
    }
}

function atiraJ(x,y){
    var t=document.createElement("div");
    var som=document.createElement("audio");
    var att1=document.createAttribute("class");
    var att2=document.createAttribute("style");
    var att3=document.createAttribute("src");
    var att4=document.createAttribute("id");
    att1.value="tiroJog";
    att2.value="top:"+y+"px;left:"+x+"px;";
    att3.value="shoot.wav?"+new Date();
    att4.value="som"+isom;
    t.setAttributeNode(att1);
    t.setAttributeNode(att2);
    som.setAttributeNode(att3);
    som.setAttributeNode(att4);
    t.appendChild(som);
    document.body.appendChild(t);
    document.getElementById("som"+isom).play();
    isom++
}
function controlaJogador(){
    pjy+=diryJ*velJ;
    pjx+=dirxJ*velJ;
    jog.style.top=pjy+"px";
    jog.style.left=pjx+"px";
}

function controlaTirosJogador(){
    var tiros=document.getElementsByClassName("tiroJog");
    var tam=tiros.length;
    for(var i=0;i<tam;i++){
        if(tiros[i]){
            var pt=tiros[i].offsetTop;
            pt-=veltj;
            tiros[i].style.top=pt+"px";
            colisaoTiroBomba(tiros[i]);
            if(pt<0){
                tiros[i].remove();
            }
        }
    }
}

function colisaoTiroBomba(tiro){
    var bombas=document.getElementsByClassName("bomba");
    var tam=bombas.length;
    for(var i=0;i<tam;i++){
        if(bombas[i]){
           //testes de colisao
          if(
            (
                (tiro.offsetTop<=(bombas[i].offsetTop+40))&&
                ((tiro.offsetTop+6)>=(bombas[i].offsetTop))
            )
            &&
            (
                (tiro.offsetLeft<=(bombas[i].offsetLeft+40))&&
                ((tiro.offsetLeft+6)>=(bombas[i].offsetLeft))
            )
          ){
            criaExplosaoAr(bombas[i].offsetLeft-1,bombas[i].offsetTop);
            bombas[i].remove();
            tiro.remove();
          }
           }
       }
    }

function criaExplosaoChao(x){
    if(document.getElementById("ec"+(iec-1))){
        document.getElementById("ec"+(iec-1)).remove();
    }
    var ec=document.createElement("div");
    var img=document.createElement("img");
    var som=document.createElement("audio")
    var att1=document.createAttribute("class")
    var att2=document.createAttribute("style")
    var att3=document.createAttribute("id")
    var att4=document.createAttribute("src");
    var att5=document.createAttribute("src");
    var att6=document.createAttribute("id");
    att1.value="explosaoChao";
    att2.value="top:"+(tamTelaH-57)+"px;left:"+(x-17)+"px;";
    att3.value="ec"+iec;
    att4.value="explosaochao.gif?"+new Date();
    att5.value="bomba.wav?"+new Date();
    att6.value="som"+isom;
    ec.setAttributeNode(att1)
    ec.setAttributeNode(att2)
    ec.setAttributeNode(att3)
    img.setAttributeNode(att4)
    som.setAttributeNode(att5)
    som.setAttributeNode(att6)
    ec.appendChild(img);
    ec.appendChild(som);
    document.body.appendChild(ec);
    document.getElementById("som"+isom).play();
    iec++;
    isom++
}

function criaExplosaoAr(x,y){
    if(document.getElementById("ea"+(iea-5))){
        document.getElementById("ea"+(iea-5)).remove();
    }
    var ea=document.createElement("div");
    var img=document.createElement("img");
    var som=document.createElement("audio")
    var att1=document.createAttribute("class")
    var att2=document.createAttribute("style")
    var att3=document.createAttribute("id")
    var att4=document.createAttribute("src");
    var att5=document.createAttribute("src");
    var att6=document.createAttribute("id");
    att1.value="explosaoAr";
    att2.value="top:"+(y-0)+"px;left:"+(x-0)+"px;";
    att3.value="ea"+iea;
    att4.value="explosao.gif?"+new Date();
    att5.value="explosao.mp3?"+new Date();
    att6.value="som"+isom;
    ea.setAttributeNode(att1)
    ea.setAttributeNode(att2)
    ea.setAttributeNode(att3)
    img.setAttributeNode(att4)
    som.setAttributeNode(att5)
    som.setAttributeNode(att6)
    ea.appendChild(img);
    ea.appendChild(som);
    document.body.appendChild(ea);
    document.getElementById("som"+isom).play();
    iea++;
    isom++
}

function gerenciaGame(){
    barraPlaneta.style.width=vidaPlaneta+"px";
    if(contBombas<=0){
        jogo=false;
        clearInterval(tmpCriaIni);
        telaMsg.style.backgroundImage="url('vitoria.png')";
        telaMsg.style.display="block";
    }
    if(vidaPlaneta<=0){
        jogo = false;
        clearInterval(tmpCriaIni);

        telaMsg.style.backgroundImage="url('derrota.png')";
        telaMsg.style.display="block";
    }
}

function gameLoop(){
    if(jogo){
        controlaJogador();
        controlaTirosJogador();
        controlaBomba();
        teme.play();
    }
    gerenciaGame();
    frames=requestAnimationFrame(gameLoop);
}

function reinicia(){
    var bombas=document.getElementsByClassName("bomba");
    var tam=bombas.length;
    for(var i=0;i<tam;i++){
        if(bombas[i]){
            bombas[i].remove();
        }
    }
    for(var i=0;i<tam;i++){
        if(bombas[i]){
            bombas[i].remove();
        }
    }

    telaMsg.style.display="none";
    clearInterval(tmpCriaIni);
    cancelAnimationFrame(frames);
    vidaPlaneta=300;
    pjx=tamTelaW/2;
    pjy=tamTelaH/2;
    jog.style.top=pjy+"px";
    jog.style.left=pjx+"px";
    velB=2;
    contBombas=150;
    freqCriaBomba=1700;
    jogo=true;
    tmpCriaIni=setInterval(criaBomba,freqCriaBomba);
    gameLoop();
}

function inicia(){
    jogo=false;

    //inicializaçoes do game
    tamTelaW=window.innerWidth;
    tamTelaH=window.innerHeight;
    vidaPlaneta=300;
    barraPlaneta=document.getElementById("barraPlaneta");
    barraPlaneta.style.width=vidaPlaneta+"px";
    painelContBombas=document.getElementById("contBombas");
    telaMsg=document.getElementById("telaMsg");
    document.getElementById("btnJogar").addEventListener("click",reinicia);
    telaMsg.style.backgroundImage="url('game.png')";
    telaMsg.style.display="block";


    //inicializaçoes do jogador
    dirxJ=diryJ=0;
    pjx=tamTelaW/2;
    pjy=tamTelaH/2;
    velJ=8;
    jog=document.getElementById("naveJog");
    jog.style.top=pjy+"px";
    jog.style.left=pjx+"px";

    //inicializaçoes do tiro do jogador
    ptjx=ptjy=0;
    veltj=5;

    //inicializaçoes das bombas
    velB=2;
    contBombas=150;
    freqCriaBomba=1700;
    tmpCriaIni=setInterval(criaBomba,freqCriaBomba);
    painelContBombas.innerHTML="Contagem de Bombas:" +contBombas;

    //inicializaçoes da explosao de chao e ar
    iec=iea=isom=0;
}

window.addEventListener("load",inicia);
document.addEventListener("keydown",teclaDw);
document.addEventListener("keyup",teclaUp);