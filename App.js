const http= require('http');
const server = http.createServer((req, res)=>{
    res.end('estoy respondiendo a tu solicitud v1.4')
});

const puerto = process.env.PORT || 3000;
server.listen(puerto,()=>{
    console.log('escuchando solicitudes')
})