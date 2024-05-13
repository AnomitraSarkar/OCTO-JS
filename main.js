import { readFile, writeFile } from './fs'

readFile('text.txt','utf8',(err,data)=>{
    if(err){
        console.error(err)
    }
    console.log(data)
})

const content = "end"

writeFile(
    'text', content, err=>{
        if(err){
            console.error(err)
        }
    }
)

// use append in case okay?


// creating python based API
// create a actual database or chatapp