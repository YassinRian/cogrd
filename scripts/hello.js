requirejs(["https://raw.githubusercontent.com/YassinRian/cogrd/main/scripts/say"], function(say) {
  console.log(say.hello("english"));
  console.log(say.hello("spanish"));
  console.log(say.hello("french"));
});
