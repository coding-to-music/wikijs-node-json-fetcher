// import wiki from "wikijs";
const wiki = require("wikijs").default;

wiki()
  .page("Batman")
  .then((page) => page.info("alterEgo"))
  .then(console.log); // Bruce Wayne

// wiki()
//   .page("Batman")
//   .then((page) => page.info())
//   .then(console.log); // Bruce Wayne

// wiki()
//   .page("COVID-19")
//   .then((page) => page.info())
//   .then(console.log);

wiki()
  .page("Future_Islands_discography")
  .then((page) => page.info())
  .then(console.log);

// wiki().page("Future_Islands_discography").then(console.log);
