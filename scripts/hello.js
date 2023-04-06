define(function() {
    "use strict";

    function BasicControl() 
    {
    };

    BasicControl.prototype.draw = function(oControlHost) 
    {
        const cont = oControlHost.container;
    
        const fragment = () => `<h1>Hallo Yassin Rian</h1>`

        cont.appendChild(fragment());
    };

    return BasicControl;
});