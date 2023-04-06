define(function() {
    "use strict";

    function BasicControl() 
    {
    };

    BasicControl.prototype.draw = function(oControlHost) 
    {
        const cont = oControlHost.container;
        
        const elm = () => `<h1>Hallo Yassin!!</h1>`;
    
        JQuery(cont).append('<p>hallooo</p>');
    };

    return BasicControl;
});