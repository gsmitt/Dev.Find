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
          var x = anime.random(0, 100);

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

            var size = anime.random(2, 5);

            dot.style.width = size + "px";
            dot.style.height = size + "px";

            dot.style.left = x + "vw";
            dot.style.top = "555px";


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
            value: "-560px",

            duration: function (e, i) {
              return anime.random(20000, 25000) / e.style.width.replace("px", "")
            },
            delay: anime.stagger(200)
          }
        })


        .add({
          easing: "linear",
          targets: document.querySelectorAll(".dot2"),
          translateY: {
            value: "-560px",

            duration: function (e, i) {
              return anime.random(20000, 25000) / e.style.width.replace("px", "")
            },
            delay: anime.stagger(200)
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

