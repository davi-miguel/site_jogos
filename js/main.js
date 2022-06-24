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



 function logan2(){
        location.href="game.html";
     }
     function logan3(){
        location.href="ping_pong.html";
     }
     function logan4(){
        location.href="./nave.html";
     }
     function logan5(){
        location.href="./tele-bomba.html";
     }
     function logan6(){
      location.href="bola_yellow.html";
     }
     function logan7(){
      location.href="./mina espacial.html";
   }
   function logan1(){
      location.href="snake.html";
   }
     function logan8(){
        location.href="https://playcanv.as/p/2OlkUaxF/";
     }
     function logan9(){
        location.href="tetris - Cópia.html"
     }
     function logan10(){
        location.href="color blast.html"
     }
     function logan25(){
      location.href="labirinto/index.html"
   }
     function logan11(){
        location.href="dino.html"
     }
     function logan12(){
        location.href="atari  breakout.html"
     }
     function logan13(){
        location.href="./Space Shooter Game using JavaScript/assets/game.html"
     }
     function logan14(){
        location.href="./Space Invader Game using JavaScript/space invader.html"
     }
     function logan15(){
        location.href="./jogoDaForca-master/forca.html"
     }
     function logan16(){
        location.href="./menja.html"
     }
     function logan17(){
        location.href="./planet.html"
     }
     function logan18(){
        location.href="mario-main/mario-main/index.html"
     }
     function logan19(){
        location.href="bomberman-main/index.html"
     }
     function logan20(){
        location.href="reator/reator/start reator.html"
     }
     function logan21(){
        location.href="traffic_racer/index.html"
     }
     function logan22(){
        location.href="batle/BatalhaNaval-master/battleship.html"
     }
     function logan23(){
        location.href="Dash/Dash/index.html"
     }
     function logan24(){
        location.href="projeto nave/saveThePlanet.html"
     }
     