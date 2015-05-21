var Singleton = (function () {

    var cpt = 0;


    function doCPT() {
        return ++cpt;
    }

    // Donne un accès "public" à doCPT
    return {
        doCPT: doCPT
    }

})(); // <- le () 'instancie' Singleton

module.exports = Singleton;