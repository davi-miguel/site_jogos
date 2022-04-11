// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});


function logar1(){
    location.href="jogos/cobrinha/cobrinha.html";
 }

 function logar2(){
        location.href="jogos/jogo_da_velha/jogo_da_velha.html";

     }
     function logar3(){
        location.href="jogos/ping_pong/ping_pong.html";
     }
     function logar4(){
        location.href="jogos/batalha_espacial/batalha_espacial.html";

     }
     function logar5(){
        location.href="jogos/flappy_bird/flappy_bird.html";

     }

     function logar6(){
        location.href="jogos/bolinha_amarela/bolinha_amarela.html";
     }
