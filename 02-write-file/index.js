const fs = require('fs');
const path = require('path');
let writeStr = fs.createWriteStream(path.join(__dirname,'data.txt'))
const { stdin, stdout} = process;

stdout.write('Hello! Please, type something\n');
stdin.on('data', data => {
    if(data.toString().trim() === 'exit'){
        console.log('Good luck!')
        process.exit()
    } else {
    writeStr.write(data.toString()); 
    }
   
})
process.on('SIGINT', () =>{
    console.log('Good luck!')
    process.exit()
})
