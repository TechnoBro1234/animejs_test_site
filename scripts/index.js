import { animate, createDraggable, createSpring, createScope } from "./libraries/anime.esm.js"; // YAY ESMODULES YAYYYYYYYYYYYYY
let rotations = 0 // fuck

function main() {
  function spin() {
    rotations++
    animate("#him", {
      rotate: rotations*360,
      duration: 1500,
      ease: 'inOutQuint',
    });
  }
  function bounce() {
    animate("#him", {
      scale: [
        { to: 1.30, ease: 'inOutCirc', duration: 250 },
        { to: 1, ease: createSpring({ stiffness: 350 }) }
      ],
      duration: 500
    });
  }
  function move() {
    animate("#him", {
      translateX: ($("input#move_slider").val()/100)*(window.innerWidth-140),
      duration: 1000,
      ease: createSpring({stifness: 300})
    })
  }
  function change_sprite() {
    $("#him").attr("src", `images/ticsy/${$("#sprite_dropdown").val()}.png`)
  }
  $("button#spin_button").click(spin)
  $("button#bounce_button").click(bounce)
  $("button#move_button").click(move)
  $("#sprite_dropdown").change(change_sprite)
}



$(main);