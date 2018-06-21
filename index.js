var fs = require('fs');
var colors = require('colors');

fs.readdir('./txt', 'utf-8', function(err, data) {
    fs.writeFile('./nowytekst.txt', data, function(err){
        if(err) throw err;
        console.log('Zapisano nowy plik txt'.blue);
    });
});
