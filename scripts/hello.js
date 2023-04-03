define(function() {

  function Person() { }

  Person.prototype.draw = function(oControlHost) {
  name_ = 'yassin';
  const elm = document.getElementById('yassin');
  elm.innerHTML(name_);
  }

  return Person;
});
