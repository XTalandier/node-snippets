var params = {};

if (process.argv.length >= 3) {
    for (var i = 2; i < process.argv.length; i++) {
        var expl = process.argv[i].split('=');
        params[expl[0]] = expl[1];
    }
}else{
    console.log("Utilisation:");
    console.log("   node arg1=AA arg2=BB");

    process.exit();
}


console.log(params);
