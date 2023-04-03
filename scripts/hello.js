define(function() {

  function Person() { }

  Person.prototype.bla = function() {
  name_ = 'yassin';
  const elm = document.getElementById('yassin');
  elm.innerHTML(name_);
  }

  return Person;
});
