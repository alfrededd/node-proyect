const express = require('express');
const app = express();

require('dotenv').config();

//configuracion de puerto
const port =process.env.PORT || 3000; 

//Conexion a base de datos
const mongoose = require('mongoose');


const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.w3cru.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Base de datos conectada')) 
  .catch(e => console.log('error de conexión', e))
;


// Motor de plantilla ejs en la carpeta views
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.use('/',require('./router/RutasWeb'));
app.use('/mascotas',require('./router/Mascotas'));

app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo: "404",
        descripcion:"titulo del sitio web"
    })
});

app.listen(port,()=>{
    console.log('servidor a su servicio en el puerto',port)
})