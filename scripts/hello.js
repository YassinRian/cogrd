define(function() {
    "use strict";

    function BasicControl() 
    {
    };

    BasicControl.prototype.draw = function(oControlHost) 
    {
        const cont = oControlHost.container;
    
        const fragment = document.createDocumentFragment();
        const li = fragment
        .appendChild(document.createElement("section"))
        .appendChild(document.createElement("ul"))
        .appendChild(document.createElement("li"));
        li.textContent = "hello Yassin Rian";

        cont.appendChild(fragment);
    };

    return BasicControl;
});