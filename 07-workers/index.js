var Worker = require('webworker-threads').Worker;

var worker = new Worker(function () {
    postMessage({msg: "Worker ready"});
    postMessage({msg: "Maintenant:" + (new Date())});

    this.onmessage = function (event) {
        if (event.data == 'run') {
            var cpt = 0;
            var d1 = new Date();

            while (true) {
                if (++cpt == 999999999) {
                    postMessage({msg: "Fin:" + (new Date())});
                    self.close();
                    postMessage({
                        msg: 'DONE',
                        value: cpt,
                        duration: (new Date()) - d1
                    });
                }
            }
        }
    };
});

worker.onmessage = function (event) {
    if (event.data.msg == 'DONE') {
        console.log('\n\nThread terminé en ' + (event.data.duration / 1000) + 'sec');
        clearInterval(int);
        process.exit();
    } else {
        console.log("\nWorker said : " + event.data.msg);
    }
};
worker.postMessage('run');


var int = setInterval(function(){
    console.log('Je tourne dans le thread principal');
}, 300);
