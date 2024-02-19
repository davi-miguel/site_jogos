const som_win = new Audio();
som_win.src = './win.wav';

const GAME_OVER = new Audio();
GAME_OVER.src = './game over.wav';

// game over

let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria:"E UM LUGAR NO OESTE DA EUROPA"
    },
    palavra002 = {
        nome: "JAPAO",
        categoria:"E UM LUGAR PERTO DA ASIA"
    },
    palavra003 = {
        nome: "CHINA",
        categoria:"E UM LUGAR DO LADO DO JAPAO"
    },
    palavra004 = {
        nome: "INDONESIA",
        categoria:"E UM LUGAR DO SUL DA ASIA"
    },
    palavra005 = {
        nome: "NOVA ZELANDIA",
        categoria:"E UM LUGAR NOVO"
    },
    palavra006 = {
        nome: "INGLATERRA",
        categoria:"E UM LUGAR DA EUROPA"
    },
    palavra007 = {
        nome: "GROELANDIA",
        categoria:"É UM LUGAR FRIO"
    },
    palavra008 = {
        nome: "PAQUISTAO",
        categoria:"FICA NA ASIA"
    },
    palavra009 = {
        nome: "INDONESIA",
        categoria:"É UM LUGAR FRIO"
    },
    palavra010 = {
        nome: "AMAZONIA",
        categoria:"É UM LUGAR NO SUDOESTE DO BRASIL"
    },
    palavra011 = {
        nome: "BICICLETA",
        categoria:"TEM DUAS RODAS"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria:"É MUITO RAPIDO"
    },
    palavra013 = {
        nome: "NAVIO",
        categoria:"É UM TRANSPORTE MUITO GRANDE"
    },
    palavra014 = {
        nome: "TELEFERICO",
        categoria:"TRANSPORTE"
    },
    palavra015 = {
        nome: "MOTOCICLETA",
        categoria:"TEM MOTOR E É DE DUAS RODAS"
    },
    palavra016 = {
        nome: "BARCO",
        categoria:"É PEQUENO"
    },
    palavra017 = {
        nome: "AERONAVE",
        categoria:"VOA"
    },
    palavra018 = {
        nome: "TREM",
        categoria:"PIUIIIII"
    },
    palavra020 = {
        nome: "PIRUA",
        categoria:"É UM TRANSPORTE GRANDE"
    },
    palavra021 = {
        nome: "XICARA",
        categoria:"É USADA PARA BEBER"
    },
    palavra022 = {
        nome: "MOEDA",
        categoria:"É UM OBJETO MUITO ANTIGO"
    },
    palavra023 = {
        nome: "ESPARADRAPO",
        categoria:"É USADO NO MACHUCADO"
    },
    palavra024 = {
        nome: "SINO",
        categoria:"FAZ BARULHO FINO"
    },
    palavra025 = {
        nome: "CHUVEIRO",
        categoria:"CAI AGUA"
    },
    palavra026 = {
        nome: "TAMBOR",
        categoria:"FAZ BARULHO"
    },
    palavra027 = {
        nome: "LAMPADA",
        categoria:"É OVAL"
    },
    palavra028 = {
        nome: "PIA",
        categoria:"TEM TONEIRA"
    },
    palavra029 = {
        nome: "CORTINA",
        categoria:"É USADO PARA TAMPAR ALGUMA COISA"
    },
    palavra030 = {
        nome: "LAPIS",
        categoria:"TEM QUE APONTAR"
    },
    palavra031 = {
        nome: "ABOBORA",
        categoria:"É O MAIOR LEGUME DE TODOS"
    },
    palavra032 = {
        nome: "AMENDOIM",
        categoria:"NOS DESENHOS OS ELEFANTES GOSTAM"
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria:"É UMA PEQUENA TORTA QUE PODE SER ABERTA OU FECHADA"
    },
    palavra034 = {
        nome: "PIZZA",
        categoria:"É FEITO DE MASSA"
    },
    palavra035 = {
        nome: "CAJU",
        categoria:"É UMA CASTANHA"
    },
    palavra036 = {
        nome: "MELAO",
        categoria:"É UMA FRUTA GIGANTE"
    },
    palavra037 = {
        nome: "XUXU",
        categoria:"É UM ALIMENTO GRUDANTE"
    },
    palavra038 = {
        nome: "CAQUI",
        categoria:"É DA FAMILIA DO TOMATE"
    },
    palavra039 = {
        nome: "BALA",
        categoria:"É UM DOCE PEQUENO"
    },
    palavra040 = {
        nome: "PIRULITO",
        categoria:"É UM DOCE MUITO GOSTOSO"
    },
    palavra040 = {
        nome: "DRAGAO",
        categoria:"NUNCA EXISTIU E SOLTA FOGO PELA BOCA"
    },
    palavra041 = {
        nome: "GALINHA",
        categoria:"É UMA AVE QUE NÃO VOA"
    },
    palavra042 = {
        nome: "PAVAO",
        categoria:"É COLORIDO"
    },
    palavra043 = {
        nome: "CAMELO",
        categoria:"CONSEGUE FICAR MUITO TEMPO SEM BEBER ÁGUA"
    },
    palavra044 = {
        nome: "PERU",
        categoria:"É UMA AVE, QUE SÓ OS MACHOS TEM CARÚNCULA"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria:"TEM LISTRAS"
    },
    palavra046 = {
        nome: "DROMEDARIO",
        categoria:"VIVE NO DESERTO"
    },
    palavra047 = {
        nome: "CROCODILO",
        categoria:"E UM ANIMAL COM ESCAMAS, QUE O TAMANHO CHEGA ATÉ 6,10 METROS DE COMPRIMENTO"
    },
    palavra048 = {
        nome: "JACARE",
        categoria:"É UM RÉPTIL DE BOCA GRANDE CHEIA DE DENTES"
    },
    palavra049 = {
        nome: "LAGARTIXA",
        categoria:"PARECE UM LAGARTO"
    },
    palavra050 = {
        nome: "HIPOPOTAMO",
        categoria:"E UM ANIMAL GRANDE, E TERRITORIAL"
    }
];


criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
   
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "black";
    document.getElementById(tecla).style.color = "#109";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
            GAME_OVER.play()
        }
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
        som_win.play()
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});




