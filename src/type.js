"use strict";

new TypeIt(".home__title--name", {
  loop: true,
  speed: 100,
})
  .move(null, { to: "END" })
  .pause(1000)
  .type(", Back-end Engineer")
  .pause(1000)
  .move(-9)
  .delete(8)
  .type("Full-stack")
  .pause(1000)
  .move(9)
  .delete()
  .go();
