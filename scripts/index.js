import { animate, createDraggable, createSpring, createScope } from "./libraries/anime.esm.js"; // YAY ESMODULES YAYYYYYYYYYYYYY

function main() {
  function spin() {
    animate("#him", {
      rotate: "+=360",
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
    console.log($("input#move_slider").val())
    animate("#him", {
      translateX: ($("input#move_slider").val()/100)*(window.innerWidth-140),
      duration: 1000,
      ease: createSpring({stifness: 300})
    })
  }
  function change_sprite() {
    console.log(`images/ticsy/${$("#sprite_dropdown").val()}.png`)
    $("#him").attr("src", `images/ticsy/${$("#sprite_dropdown").val()}.png`)
  }
  $("button#spin_button").click(spin)
  $("button#bounce_button").click(bounce)
  $("button#move_button").click(move)
  $("#sprite_change_button").click(change_sprite)
}



$(main);