const fs = require('fs')
const path = require('path')
const fsPromises = fs.promises;
fsPromises.mkdir(path.join(__dirname,'files-copy'), {recursive:true} ).then( function () {
    console.log( 'Directory created successfully' );
    }). catch ( function () {
    console.log( 'failed to create directory' );
    });

fs.readdir(path.join(__dirname,'files'), (err, filess)=> {
    if(err)throw err;
    console.log(filess)
    filess.forEach(el=>{
        fs.copyFile(path.join(__dirname,'files', el), path.join(__dirname, 'files-copy', el), (err)=>{
            if(err) throw err;
            console.log('done')
        })
    })
})
