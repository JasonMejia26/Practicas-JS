const fs = require ("fs")


async function writeFunction (){
    try {
        const nota = fs.writeFileSync("Nota.txt", "Hola Mundo")
        const archivo = fs.readFileSync("Nota.txt"),
        archtexto = archivo.toString()
        console.log(archtexto)
    } catch (error) {
        console.error("Error, Falla en la Escritura")
    }
}
writeFunction()