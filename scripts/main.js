import { animate, createDraggable, createSpring, createScope } from "./libraries/anime.esm.js"; // YAY ESMODULES YAYYYYYYYYYYYYY
let rotations = 0 // god i hate this

function main() {
  function spin() {
    rotations++
    animate(".logo", {
      rotate: rotations * 360,
      duration: 1500,
      ease: 'outBounce',
    });
  }
  function bounce() {
    animate(".logo", {
      scale: [
        { to: 1.30, ease: 'inOutCirc', duration: 250 },
        { to: 1, ease: createSpring({ stiffness: 350 }) }
      ],
      duration: 500
    });
  }
  function move() {
    console.log($("input#move_slider").val())
    animate(".logo", {
      translateX: ($("input#move_slider").val()/100)*(window.innerWidth-140),
      duration: 1000,
      ease: createSpring({stifness: 300})
    })
  }
  $("button#spin_button").click(spin)
  $("button#bounce_button").click(bounce)
  $("button#move_button").click(move)
}



$(main);