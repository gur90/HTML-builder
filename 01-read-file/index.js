const fs = require('fs');
const path = require('path');

const readebleStream = fs.ReadStream(path.join(__dirname, "text.txt"), 'utf8')
let data = '';
readebleStream.on('data', chunk => data+=chunk)
readebleStream.on('end',()=>  console.log(data))

