const http = require ('http')
const queryString = require('querystring')


// const handleRequest = (req, res)=>{
//     res.writeHead(200)
//     res.end("Hola desde Node.js")
// }

const handleRequest = (req, res)=>{
    if(req.method === 'GET'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Hola desde Node. Jason")
    }else if(req.method === 'POST'){
        let body = '';
        req.on('data', chunk=>{
            body += chunk.toString()
            //console.log('Chunk:', chunk.toString())
        })
        req.on('end', ()=>{
            const parseBody = queryString.parse(body)
            //console.log(parseBody)
            const nombre = parseBody.nombre;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain')
            res.end(`Hola, ${nombre}`)
        })
    }else{
        res.statusCode = 405;
        res.end("Metodo No Permitido")
    }
}

const server = http.createServer(handleRequest)

server.listen(3000, ()=>{
    console.log("Servidor Corriendo en 3000")
})