var mode = process.env.MODE;

if(undefined === mode){
    console.log("Lancer l'appli de cette manière:");
    console.log("    MODE=dev node index.js");

    process.exit();
}

var conf = require('./conf/conf-' + mode);

console.log("CONF: ");
console.log(JSON.stringify(conf));






