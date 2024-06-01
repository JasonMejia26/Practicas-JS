const fs = require ('fs');
const { resolve } = require('path');


async function readFunction(){
    try {
        const archivo = await fs.readFileSync("Nota.txt"),
        archtexto = archivo.toString();
        console.log(archtexto)
    } catch (error) {
        console.error("Error, Falla en la Lectura")
    }

}

readFunction()

