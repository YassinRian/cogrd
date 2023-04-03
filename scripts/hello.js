define(function() {

  function Person(name) {
    this.name = name
  }

  const yassin = new Person('Yassin Rian');
  const elm = document.getElementById('yassin');

  return elm.innerHTML(yassin);

});
