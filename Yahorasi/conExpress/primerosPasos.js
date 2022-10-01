
const { application } = require("express")
const express = require ("express")
const app = express()
/*app.get('/', (req, res) => {
    res.send('¡Hola mundo!');
   });
app.listen(3000, () =>
    console.log('Servidor corriendo') )*/
app.get('/', (req, res) => {
        res.send('¡Hola mundo!');
       });
app.listen(8000, () =>
        console.log ("Levantando un servidor con Express"))
app.get ("./home",function(req,resp) { res.send("Hola, estamos en el HOme ")})
       
//=====================0
