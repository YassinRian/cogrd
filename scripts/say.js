define(["https://raw.githubusercontent.com/YassinRian/cogrd/main/scripts/translations"], function(translations){
  return {
    hello: function(language) {
      return translations[language].hello + " " + translations[language].world;
    }
  };
});
