const fs = require ('fs')

const rFile = (nombre = "Nota.txt")=>{
    nombre = fs.readFileSync("Nota.txt");
    nota = nombre.toString()

    
if(nombre == nota){
    console.log("Lectura Exitosa")
    console.log(nota)
}else{
    console.error("Error, Lectura no Exitosa")
}
}

rFile()
