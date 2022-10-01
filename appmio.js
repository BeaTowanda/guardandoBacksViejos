console.log("estoy")
let fs = require ("fs")
//codigo anterior 
//let heroes = require("./superheroes")
//console.log(heroes)
//console.log("es un dirección "+ __dirname)
//require("./superheroes/texto4.txt")
//let datos = fs.readFileSync(__dirname + "./superheroes/texto4.txt","utf-8")
//console.log(datos)
//let series = require ("./series/nombre")
//console.log(series)
// termina codigo anterior
let suma = require ("./series/sumar")
let resta = require ("./series/restar")
let division= require ("./series/dividir")
let multiplica = require ("./series/multiplicar")
const { stringify } = require("querystring")
const { argv } = require("process")
let numA=-10
let numB=5
console.log("resultado de sumar es = "+ suma(numA,numB))
console.log("resultado de restar es = "+ resta(numA,numB))
console.log("resultado de multiplicar  es = "+ multiplica(numA,numB))
console.log("resultado de dividir es = "+ division(numA,numB))
let respuesta = fs.readFileSync("./series/razones.txt", "utf-8")
console.log(respuesta)
let primerNumero= Number()
console.log(" primer Numero debe ser "+ primerNumero)
console.log("fin de ejercicio calculadora ")

/* AQUI EMPIEZA EL EJERCICIO JSON PRIMERO DEL MODULO 5 PARTE 1 */
// ACORDARSE QUE ARRIBA YA TENGO LET FS= REQUIRE (FS)
// DE AHÍ PARTO 
let datos = fs.readFileSync("./rutinasBasicas/masJason/tareasJason.JSON","utf-8")
let tareas = JSON.parse(datos)
console.table(" así sale el archivo tareas después de let tareas: " + tareas)
console.table(tareas) 
let comando = process.argv[2]
console.log ("comando leido es = " + comando)

/*if (comando == "listar"){  
    for (let i = 0 ; i<= tareas.length-1; i++){      
        console.log(tareas[i])}}
else if (comando == undefined){
    console.log("Atención : tienes que pasar una acción ")}
else {console.log("No entiendo que quieres hacer  ")}*/
/*switch (comando) {
    case "listar" : console.table(tareas)     
    break
    case undefined : console.log("Atención : tienes que pasar una acción")
    break
   default : console.log("No entiendo que quieres hacer  ")     } */

/* AHORA VENGO CON FUNCIONES SOBRE UN ARCHIVO JSON.. SE LLAMA funcionesDetareas.js que
EXPORTA archivoDetareasA */
console.log (" ======= kilombo haciendo una función ====================")

console.log (" ======= kilombo haciendo una función ====================")
let salida = require ("./rutinasBasicas/masJason/funcionesDeTareasMio.js")

let comandoA = process.argv[2]
switch (comandoA) {
    // "veamos" : console.table(salida)    
    case "veamos ": listarTareas(salida) 
    break
    case undefined : console.log("Atención : tienes que pasar una acción")
    break
    default : console.log("No entiendo que quieres hacer  ")     }
















