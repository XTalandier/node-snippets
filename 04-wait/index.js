var wait = function (callbacks, done) {
    var cpt = callbacks.length;
    var next = function () {
        if (--cpt == 0) {
            done();
        }
    };

    for (var i = 0; i < callbacks.length; i++) {
        callbacks[i](next);
    }
};



function laSuite(){
    console.log("\n\n\nOK c'est bon, tout est fait :)");
}


function trucLong1(next){
    setTimeout(function(){
        console.log('trucLong1: Check !');
        next();
    }, 300);
}

function trucLong2(next){
    setTimeout(function(){
        console.log('trucLong2: Check !');
        next();
    }, 600);
}

function trucLong3(next){
    setTimeout(function(){
        console.log('trucLong3: Check !');
        next();
    }, 1000);
}


wait([trucLong1,trucLong2, trucLong3], laSuite);

console.log('Tout est lancé !');



