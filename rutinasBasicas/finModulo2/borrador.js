
// CREACION DEL MODULO JSON 
/*En base a las definiciones técnicas tomadas con el equipo deberás declarar la variable autos.
 Esta debe contener los siguientes vehículos:

El primer auto es un Ford Fiesta Azul, del 2019, con 200 kilómetros, 
cuyo precio es 150000, disponible en 12 cuotas, con la patente APL123 que no está vendido.
El segundo auto es un Toyota Corolla Blanco, del 2019, 0 kilómetros,
 cuyo precio es 100000, disponible en 14 cuotas, con la patente JJK116 que no está vendido.
Cada auto debe tener los siguientes atributos: 
marca, modelo, precio, km, color, cuotas, anio, patente, vendido.*/
// LOS GUARDO EN AUTOS.JSON
let borradorJson = [{marca : "Toyota", modelo :" Corolla",precio: 100000 , km: 0 , 
color:"Blanco", cuotas: 14, anio: 2019 , patente: "JJK116",vendido: false },
{marca : "Ford", modelo :" Fiesta",precio: 150000 , km: 0 , color:"Azul", 
cuotas: 12, anio: 2019 , patente: "APL123",vendido: true},
{marca : "Peugot", modelo :"New",precio: 180000 , km: 0 , color:"plata", 
cuotas: 10, anio: 2019 , patente: "DEO143",vendido: true},]
/*function agregarHttp(url) {
    return  url  = "http://"+ url
}
function largoString(url){
  return url.length
}

function procesar(array,callback){
    let url =""
    for (let i = 0;i<=array.length-1;     i++){
    url=(array[i])
    array[i]= callback(url)
    }      return array }*/
//concesionaria = [{vendedor:"",autos:[borradorJson.patente]}]
// pruebas

/*let agregar= function agregarJason (nuevo){
    //let salidaA = fs.readFileSync("./tareasJason.JSON")
    //console.table(salidaA)
    let nuevasTareas = JSON.parse(fs.readFileSync("./rutinasBasicas/masJason/tareasJason.JSON"))
    nuevasTareas.push(nuevo)    
    let nuevasTareasAJason = JSON.stringify(nuevasTareas)
    fs.writeFileSync("tareasJason.JSON",nuevasTareasAJason) 
    console.log(nuevasTareasAJason)
     }*/
     let autosJason = require('./borrador.js')
     let conce = function procesar(borradorJson){
    let nuevoArray=[]
    console.log("falta hacer con filter")   
    for (let i = 0; i< borradorJson.length; i++){
        if (borradorJson[i].vendido == true) {              
          nuevoArray.push(borradorJson[i].patente)
          return nuevoArray
          } } }
       
          
//* CONCE ES LA FUNCIÓN QUE HACE QUE SE GUARDEN TODAS LA PATENTES NO VENDIDOS 
//!!!!!!!!!!!!!
let concesionaria = [{vendedor:"",autos:conce(borradorJson) }]
//!!!!!!!!!!!!!!!!  
console.table(concesionaria)
//---------------------------------------------------
// el CODIGO DE ARRIBA LO QUE HICE FUÉ CON UN ARRAY, QUE TIENE OBJETOS LITERALES
// QUE A SU VEZ UN CAMPO DEL OBJETO LITERAL 