define(function() {

  function Person(name) {
    this.name = name
  }

  const yassin = new Person('Yassin Rian');
  
  yassin.prototype.addName = function(name) {
  const elm = document.getElementById('yassin');
  elm.innerHTML(yassin);
  }

  return Person;

});
