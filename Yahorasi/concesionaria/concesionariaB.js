
 /*   Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.

Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior*/
/*let concesionaria = {
   autos: ???, 
   buscarAuto: ???
} */

// PASO 3 . VENDER AUTO
/*les pide que agreguen la funcionalidad de venderAuto
 que recibe la patente y, en caso de encontrar al automóvil,
  le asigna el estado de vendido.
¿Cómo lo resuelven?
Recordatorio: Para comenzar tenés que agregar el código que escribiste
 en el ejercicio anterior. Para resolver esta nueva funcionalidad, 
 tendrás que utilizar la función buscarAuto.*/

const fs = require ("fs")
let comando = process.argv[2] 
function buscarA (comando) { 
    let array = require ("./autos.js")    
    let busca = null     
    for (let i = 0; i < array.length; i++){           
      if (array[i].patente == comando){                                 
                 busca= array[i].patente } }
    return busca}
    
 function diceVendido (){     
    if (buscarA(comando) !== null ){         
    return  "vendido" } }
    //------------------------
let filtrar = function filtrarParaVender(vendido){  
       let archivo = require ("./autos.js")  
       let filtrado = archivo.filter(function(elem){
               console.log("entro en filter")
               console.log(elem.vendido)  
               return elem.vendido == false})
               return filtrado}
                
        
 
let  concesionaria = [{ autos: require ("./autos.js"),
buscarAuto : buscarA(comando), vendido : diceVendido() ,
autosParaLaVenta : filtrar(),} ]

console.table (concesionaria)