define([], function() {
    function hallo() {}

    hallo.prototype.bla() {
        console.log("hallo yassin..werkt dit?");
    }

    return hallo;
})