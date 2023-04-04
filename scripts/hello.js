define( function() {
"use strict";

function BasicControl()
{
};

BasicControl.prototype.draw = function( oControlHost )
{
	oControlHost.container.innerHTML = "Hello Yassin";
};

return BasicControl;
});