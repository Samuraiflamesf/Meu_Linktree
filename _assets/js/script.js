document.addEventListener("DOMContentLoaded", () => {
  new TypeIt("#textJs", {
    strings: "Olá, Me chamo Bernardo <br> e sou ",
    speed: 100,
    loop:true
  })
  .type('Programador 👨‍💻', {delay:900})
  .delete(15)
  .type('Matemático 👨‍🏫', {delay:1000})
  .delete(14)
  .type('Gato 😼', {delay:500})
  .delete(4)
  .type('strólogo 👨‍🍳', {delay:900})
  .pause(500)
  .delete(14)
  .type('Fotogénico ❤️‍🔥', {delay:900})
  .pause(500)
  .delete(10)
  .type('rafo 📸', {deley: 800})
  .pause(500)
  .delete(11)
  .type('Bonito 🤣', {delay:1000})
  .delete(8)
  .type('NERD 👽👾', {delay:1000})

  .pause(5000)
  .go();

});