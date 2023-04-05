define(function(){


    function BasicControl() {};

    BasicControl.prototype.draw = function(oControlHost) {
        const cont = oControlHost.container;
        cont.InnerHTML = `<h1>Hallo Yassin Rian!!</h1>`
    }

    return BasicControl;
});