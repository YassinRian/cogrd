define(function() {
    "use strict";

    function BasicControl() 
    {
    };

    BasicControl.prototype.draw = function(oControlHost) 
    {
        const cont = oControlHost.container;
        cont.innerHTML = "Hallo Yassin";
        
    };

    return BasicControl;
});