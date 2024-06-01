
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');


const rFileSync = (nota = "Nota.txt")=>{
    nota = fs.readFileSync("Nota.txt");
    let texto = nota.toString()
    let error = "Error, Lectura no Exitosa";
    return new Promise((resolve, rejects)=>{
        resolve({texto})
        rejects({error})
    })
    
}

rFileSync().then(obj=>{
    console.log("Inicia Promesa")
    console.log(obj.texto)
}).catch(console.log("Error, Falla en la Lectura"))