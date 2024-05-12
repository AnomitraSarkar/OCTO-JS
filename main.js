const fs = require('fs')


fs.readFile('main.mach','utf8',(err,data)=>{
    if(err){
        console.error(err)
    }
    console.log(data)
})


const content = "end"

fs.writeFile(
    '', content, err=>{
        if(err){
            console.error(err)
        }
    }
)

// use append in case okay?