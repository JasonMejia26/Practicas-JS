const { error } = require('console')
const fs = require('fs')

async function deleteFunction (){
    fs.unlink('./Nota.txt', (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("Eliminacion Exitosa")
        }
    })

    fs.rmdir('./test', (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("Eliminacion Exitosa")
        }
    })
}

deleteFunction()