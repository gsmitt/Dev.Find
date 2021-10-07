import "./styles.css";
import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es'

export function AnimationHome(props) {
  useEffect(
    () => {
      if (!document.querySelector(".dot")) {
        const container = document.querySelector(".cont");

        var l = 150;

        for (var i = 0; i <= l; i += 1) {
          var x = anime.random(0, 96);

          var n = 1;

          for (var j = 0; j < n; j++) {
            var dot = document.createElement("div");
            dot.classList.add("dot");
            if (i <= 75) {
              dot.classList.add("dot1");
            } else {
              dot.classList.add("dot2");
            }
            container.appendChild(dot);

            var size = anime.random(2, 4);

            dot.style.width = size + "px";
            dot.style.height = size + "px";

            dot.style.left = x + "vw";
          }
        }
        

        var tl = anime.timeline({
          loop: true, 
        });
        
        tl
        .add({
          easing: "linear",
          targets: document.querySelectorAll(".dot1"),
          translateY: {
            value: function(e){
             return -(window.innerHeight*7.2)/10
            },

            duration: function (e, i) {
              return anime.random(4000, 5000) * e.style.width.replace("px", "")
            },
            delay: anime.stagger(400)
          }
        })


        .add({
          easing: "linear",
          targets: document.querySelectorAll(".dot2"),
          translateY: {
            value: function(e){
              return -(window.innerHeight*7.2)/10
             },

            duration: function (e, i) {
              return anime.random(4000, 5000) * e.style.width.replace("px", "")
            },
            delay: anime.stagger(400)
          }
        },12350);

      }
    }
  )

  return (
    <div className="cont">
    </div>
  );
}

