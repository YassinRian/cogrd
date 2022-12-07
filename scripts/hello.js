define(["https://raw.githubusercontent.com/YassinRian/cogrd/main/scripts/say.js"], function(say) {
  console.log(say.hello("english"));
  console.log(say.hello("spanish"));
  console.log(say.hello("french"));
});

// define(function(require) {
//   "use strict";
//   var say = require("https://raw.githubusercontent.com/YassinRian/cogrd/main/scripts/say.js");
//   console.log(say.hello("english"));
//   console.log(say.hello("spanish"));
//   console.log(say.hello("french"));
// })
