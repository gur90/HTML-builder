const fs = require('fs');
const path = require('path');

const readebleStream = fs.ReadStream(path.join(__dirname, "text.txt"), 'utf8')
let data = '';
readebleStream.on('data', chunk => data+=chunk)
readebleStream.on('end',()=>  console.log(data))

/*fs.readFile(
    path.join(__dirname, "text.txt"), "utf8",
    function(error, data){
        console.log('async');
        if(error) throw error;
        console.log(data)
    })*/