define([], function() {
  'use strict';
  
  function insrt() {};

  insrt.prototype.initialize = function(oControlHost, fnDoneInitializing)
  {
    fnDoneInitializing();
  }

  return insrt;
});
