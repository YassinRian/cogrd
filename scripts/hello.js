define(function() {

  function Person(name) {
    this.name = name
  }

  Person.prototype.bla = function() {
  name_ = this.name;
  const elm = document.getElementById('yassin');
  return elm.innerHTML(name_);
  }

});
