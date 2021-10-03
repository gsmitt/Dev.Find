import "./styles.css";
import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es'

export function AnimationHome(props) {
    useEffect(
        () => {
            const container = document.querySelector(".cont");

            var l = 150;
        
            for (var i = 0; i <= l; i += 1) {
                var x = anime.random(0, 100);
        
                var n = 1;
        
                for (var j = 0; j < n; j++) {
                    var dot = document.createElement("div");
                    dot.classList.add("dot");
                    container.appendChild(dot);
                    console.log(document)
                    if (i <= 75) {
                        dot.classList.add("dot1");
                    } else {
                        dot.classList.add("dot2");
                    }
        
                    var size = anime.random(2, 10);
        
                    dot.style.width = size + "px";
                    dot.style.height = size + "px";
        
                    dot.style.left = x + "vw";
                    dot.style.top = "100vh";
        
        
                }
            }
            anime({
                loop: true,
                easing: "linear",
                targets: document.querySelectorAll(".dot1"),
                translateY: {
                  value: "-110vh",
                  
                  duration: function(e,i){
                    return anime.random(20000,25000) / e.style.width.replace("px","")
                  },
                  delay: anime.stagger(150)
                }
              });
              
              
              anime({
                loop: true,
                easing: "linear",
                targets: document.querySelectorAll(".dot2"),
                translateY: {
                  value: "-110vh",
                  
                  duration: function(e,i){
                    return anime.random(40000,50000) / e.style.width.replace("px","")
                  },
                  delay: function(e,i){
                    return (i-1) * 150 + 11000
                  }
                  
                }
              });

        }
    )

    return (
        <div className="cont">
        </div>
    );
}

