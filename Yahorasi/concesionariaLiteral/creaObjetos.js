// ==ESTA PARTE ES PARA USAR EL EXPRESS Y HABILITAR SERVIDOR. VER QUE 
// ENTRE ASTERISCOS PRIMERO LEVANTÉ EL LOCALHOST 3000 Y LUEGO EL 8000
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
       
//=====================0
   


// aprender a usar constructor
class Heroe {
    constructor (nombre,pelicula,tipo){
        this.nombre = nombre
        this.pelicula = pelicula
        this.tipo = tipo
    }
}
let heroe1 = new Heroe ("superman","El inicio","SuperHeroe")
let heroe2 = new Heroe ("Batman","El regreso","SuperHeroe")
console.table(heroe1)
console.table(heroe2)
//=============
// ver si las llamo distinto
var SuperHeroe = class SuperSuper{
    constructor (nombre,color){
    this.nombre = nombre
    this.color = color 
} }
var superMan = new SuperHeroe("Superman","rojo ")
console.log (superMan)
//========== ahora anonima a ver como sale
var Mercado = class {
    constructor (nombre,sucursal,ciudad){
        this.nombre = nombre
        this.sucursal = sucursal
        this.ciudad = ciudad
    } }
var carrefour = new Mercado("Carrefour",15,"Caba")
console.log(carrefour)
//============== ahora veo EXTENDS PARA CREAR CLASE HIJA
class Chino extends Mercado  {
    constructor (nombre,sucursal,ciudad,calle,direccion){
        super (nombre,sucursal,ciudad)
        
        this.calle = calle
        this.direccion = direccion
    } }
var chino = new Chino ("Compra Barato",2,"vte lopez","Marcos Paz",2355)
console.table(chino)
// viendo si está el express aquí
console.log(app)
    



