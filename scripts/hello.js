requirejs(["https:raw.githubusercontent.com/YassinRian/cogrd/main/scripts/say.js"], function(say) {
 const Contentview = function() {
  console.log(say.hello("english"));
  console.log(say.hello("spanish"));
  console.log(say.hello("french"));
 };
 return Contentview;
});

// define(function(require) {
//   "use strict";
//   var say = require("https:raw.githubusercontent.com/YassinRian/cogrd/main/scripts/say.js");
//   console.log(say.hello("english"));
//   console.log(say.hello("spanish"));
//   console.log(say.hello("french"));
// });

define(function(require) {
  "use strict";
  var say = require("https:raw.githubusercontent.com/YassinRian/cogrd/main/scripts/say.js");
  console.log(say.hello("marocco"));
  console.log(say.hello("spanish"));
  console.log(say.hello("french"));
});
