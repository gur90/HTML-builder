const fs = require('fs');
//const {basename} = require('path');
const  path = require('path');
const dir = path.join(__dirname,'secret-folder')
fs.readdir(dir,  (err, files)=> {
    for(let i=0; i < files.length; i++) {
        let file = dir + '/' + files[i]
        if(err) {
            console.error(err)
            return
        }
     
      fs.stat(file, function(err, stats) {
       
       if (stats.isFile()) {
           let fileName = path.basename(file).split('.').slice(0,-1).join('.')
           let ext = path.extname(file).slice(1)
          
           console.log(fileName + " " + "-"+ " "+ ext + " "+ "-" + " " + stats["size"] +"B")
           
       }
      })
    }
   
})

