define(function() {
    "use strict";

    function BasicControl() 
    {
    };

    BasicControl.prototype.draw = function(oControlHost) 
    {
        const cont = oControlHost.container;
        cont.innerHTML = "<h1>Hallo Yassin Rian!!</h1>"
    };

    return BasicControl;
});