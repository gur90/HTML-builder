const fs = require('fs/promises')
const path = require('path')
const fsPromises = fs.promises;
const http = require("http");
const index= path.join(__dirname, 'project-dist', 'index.html')
const { stdin, stdout} = process;
const bundle= path.join(__dirname, 'project-dist','style.css')
const styles =path.join(__dirname, 'styles')
async function style(){
    try{
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
            //console.log(arr)     
        await fs.writeFile(bundle, arr.join('\n'))
    }catch (err){ console.log(err)}
}
style()
fs.mkdir(path.join(__dirname,'project-dist'), {recursive:true} ).then( function () {
    console.log( 'Directory created successfully' );
    }). catch ( function () {
    console.log( 'failed to create directory' );
    });
const dir = path.join(__dirname, 'project-dist/assets')
const from = path.join(__dirname, 'assets')
const to = path.join(__dirname, 'project-dist/assets')
fs.mkdir(path.join(__dirname,'project-dist', 'assets'), {recursive:true} ).then( function () {
    console.log( 'Directory created successfully' );
    }). catch ( function () {
    console.log( 'failed to create directory' );
    });
fs.mkdir(path.join(__dirname,'project-dist', 'assets', 'fonts'), {recursive:true} ).then( function () {
        console.log( 'Directory created successfully' );
        }). catch ( function () {
        console.log( 'failed to create directory' );
        });
fs.mkdir(path.join(__dirname,'project-dist', 'assets', 'img'), {recursive:true} ).then( function () {
            console.log( 'Directory created successfully' );
            }). catch ( function () {
            console.log( 'failed to create directory' );
            });
fs.mkdir(path.join(__dirname,'project-dist', 'assets', 'svg'), {recursive:true} ).then( function () {
                console.log( 'Directory created successfully' );
                }). catch ( function () {
                console.log( 'failed to create directory' );
                });
async function copyDir(from, to){
    try {
        const fold = await fs.readdir(from, {withFileTypes:true});
        for(let fol of fold){
            const main = path.join(from, fol.name)
            const target = path.join (to, fol.name)
            if(fol.isDirectory()){
                await copyDir(main, target)
            }else {
                await fs.copyFile(main, target)
            }
        }
    } catch (error) {
        console.error(error)
    }
}
copyDir(from, to)

fs.readFile(
        path.join(__dirname, "template.html"), "utf8", function(error, data){
            if(error) throw error;
            let templ = data
            //console.log(templ)
            
                if (templ.includes('{{header}}')){
                    fs.readFile(path.join(__dirname, 'components', 'header.html'), 'utf8', function(err, data){
                        if (err) throw err;
                        templ = templ.replace('{{header}}', data);
                        //console.log(templ)
                    })
                }
                if(templ.includes('{{articles}}')){
                    fs.readFile(path.join(__dirname, 'components', 'articles.html'), 'utf8', function(err, dataAr){
                        if (err) throw err;
                        templ = templ.replace('{{articles}}', dataAr);
                        //console.log(templ)
                    })
                }
                if(templ.includes('{{footer}}')){
                    fs.readFile(path.join(__dirname, 'components', 'footer.html'), 'utf8', function(err, dataF){
                        if (err) throw err;
                        templ = templ.replace('{{footer}}', dataF);
                        //console.log(templ)
                        fs.writeFile(index, templ, function(err){
                            if(err)throw err;
                            console.log('done')
                        })
                    })
                }
           
        })    

       
            
           



      

    