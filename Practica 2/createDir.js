const { error } = require('console')
const fs = require('fs')
const path = require('path')
const { dirname } = require('path')

fs.mkdir('./test', (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Directorio Creado con Exito")
    }
})
