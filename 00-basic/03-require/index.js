var monObjet = (function () {

    var numMaillon = 0;

    function addMaillon() {
        console.log('Maillon :', ++numMaillon);
    }

    function doThing() {
        console.log("hello world !");
    }

    return {
        addMaillon: addMaillon,
        doThing: doThing
    };

})();


var maillon1 = require('./maillon1')(monObjet);



