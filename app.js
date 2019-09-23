const http = require ('http');

http.createServer((request, response) => {
    request.setHeader('Content-Type', 'application/json')
    let salida = {
        nombre: 'Ana',
        edad: 31,
        url: require.url
    }
    response.write(JSON.stringify(salida));
    response.end();
}).listen(8080);

console.log('Escuchando el puerto 8080')