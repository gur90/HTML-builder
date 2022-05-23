const { Stats } = require('fs');
const fs = require('fs/promises')
const path = require('path')
const bundle= path.join(__dirname, 'project-dist','bundle.css')
const styles =path.join(__dirname, 'styles')
async function style(){
    
            const files = await fs.readdir(styles, {
                withFileTypes:true
            })
            let arr =[]
                for(const file of files)
                    if(file.isFile() && path.extname(file.name)=='.css'){
                    const st = path.join(styles, file.name)
                    const reading = await fs.readFile(st) 
                    arr.push(reading.toString())
                    }         
                await fs.writeFile(bundle, arr.join('\n'))
   
}
style()
 