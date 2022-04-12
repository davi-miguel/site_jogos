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
    location.href="cobrinha.html";
 }

 function logar2(){
        location.href="jogo_da_velha.html";

     }
     function logar3(){
        location.href="ping_pong.html";
     }
     function logar4(){
        location.href="./batalha_espacial - Cópia/batalha_espacial.html";

     }
     function logar5(){
        location.href="flappy_bird.html";

     }

     function logar6(){
        location.href="bolinha_amarela.html";
     }
