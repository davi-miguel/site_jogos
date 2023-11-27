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

   function logan1(){
      location.href="./jogos/snake/snake.html";
   }
   function logan12(){
        location.href="./jogos/breakout/atari breakout.html"
   }
   function logan16(){
      location.href="./jogos/menja/menja.html"
   }    
   function logan10(){
        location.href="./jogos/eclipse/eclipse.html"
   }
   function logan13(){
        location.href="./jogos/space shooter/space_shooter.html"
   }
   function logan9(){
      location.href="./jogos/tetris/index.html"
   }
     function logan8(){
        location.href="https://playcanv.as/p/2OlkUaxF/";
     }
     function logan21(){
      location.href="./jogos/traffic_racer/traffic.html"
   }
   function logan23(){
      location.href="./jogos/Dash/Dash.html"
   }
   function logan20(){
      location.href="./jogos/reator/start reator.html"
   }
   function logan15(){
      location.href="./jogos/forca/forca.html"
   }
     function logan25(){
      location.href="./jogos/Labirinto/labirinto.html"
   }
     function logan26(){
        location.href="./jogos/memoria/index.html"
     }
     function logan27(){
        location.href="./jogos/bilhar/bilhar.html"
     }
     function logan28(){
        location.href="./jogos/Xadrez/xadrez.html"
     }
     function logan30(){
        location.href="./jogos/sudoku/sudoku.html"
     }
     function logan32(){
        location.href="./jogos/Dash/Dash.html"
     }
     function logan33(){
        location.href="./jogos/snake1/snake.html"
     }
     function logan34(){
        location.href="./jogos/Batalha Espacial/batalha espacial.html"
     }
     function logan35(){
      location.href="./jogos/Genius/index.html"
     }

     function logan36(){
      location.href="./jogos/battleCity/index.html"
     }

     function logan37(){
      location.href="./jogos/tower block/index.html"
     }

     function logan38(){
      location.href="./jogos/Run Adventure/index.html"
     }