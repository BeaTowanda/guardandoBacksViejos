

 /*   Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.

Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior*/
/*let concesionaria = {
   autos: ???, 
   buscarAuto: ???
} */


 const fs = require ("fs")
 let comando = process.argv[2] 
 let array = require ("./autos.js")  
 let personas = require ("./personas")
 // aux sirve para pasar posición dentro de array 
 let aux = 0
 let busca = null
 /* let filtro = archivoTareas.leerPorEstado(estado);

        filtro.forEach(function (tarea, indice) {
            console.log((indice+1) + '. ' + tarea.titulo);*/
//------------------------------------------------------
function buscarA (comando) {
    // BUSCA AUTO por patente.usa:diceVendido y PuedeComprar.Devuelve patene o Null  
    let array = require ("./autos.js")    
    let busca = null     
    for (let i = 0; i < array.length; i++){           
      if (array[i].patente == comando){  
                 aux = i                               
                 busca= array[i].patente } }
    return busca}  
     
    
//--------------------------------------------------
function buscarP (persona) { 
    // BUSCA Persona por patente.usa:diceVendido y PuedeComprar.Devuelve patene o Null   
    busca = null     
    for (let i = 0; i < personas.length; i++){   
      if (personas[i].nombre == persona){   
                 aux =  i              
                 busca = personas[i].nombre } }
    return busca }
     
  function diceVendido (){ 
     if (buscarA(comando) !== null ){         
     return  "vendido" } }
     //------------------------ 
     // tengo duda si solo quiere ver los precios. y no asociarlo con un auto 
  let listaVentas = function () {
  // aquí NO SE POR QUE FUNCIÓN LA QUIERE REEMPLAZAR
    let arrayVentas=[] 
    let x=0   
    for (let i=0 ; i< array.length ; i++){ 
        if (array[i].vendido == true) {
            arrayVentas[x]= array[i].precio 
            x++         } }
    return arrayVentas }
    //----------------------
    //let totalVentas = array.precio.reduce(function(acum,valor){
     //   return acum + valor
    function totalVentas() {         
         let arrayTotales = listaVentas()
         console.table(arrayTotales)
         let total = arrayTotales.reduce (function(acum,valor){ 
            return  acum + valor
        })
    return total  } 
        
//-------------------------------------------------------------------  
    let filtrar = function filtrarParaVender(vendido){  
    // filtra por vendido archivo Autos  
        let filtrado = array.filter(function(elem){
             return elem.vendido == false})
             return filtrado}
    //::::::::::::::::::::.
    // filtrar NO LOGRO REHUSAR LA MISMA 
     let filtrarN = function filtrarParaVender(vendido,km){       
        let filtrado = array.filter(function(elem){   
        return (elem.vendido == false) && (elem.km <=100)})
        return filtrado} 
//--------------------------------------------------------------
// hago puedeComprar pero tengo dudas si lo quiere en el archivo o como función separada
function puedeComprar(persona,auto){
    // primero validar persona y auto
    // usa buscarA/buscarP para validar duda si ingresan por terminal 
    aux = undefined 
    if (buscarA(auto) == null){         
        return "Nombre inválido "}
        else {let posicionPersona = aux}
    if (buscarP(persona) == null){
        return "Auto inválido"}
        else {let posicionAuto = aux} }
    //termina validación nombre  y patente}


    
   /* if (personaEsta == -1) {
        return ("Debe ingresar Persona Correcta")}
    else if (persona[personaEsta].capacidadDePagoTotal > 
    }*/
    
 //===============================================================
 // ARCHIVO CONCESIONARIA  
 let  concesionaria = [{ autos: require ("./autos.js"),
 buscarAuto : buscarA(comando), vendido : diceVendido() ,
 autosParaLaVenta : filtrar(),autosNuevos : filtrarN(), 
 listaDeVentas: listaVentas(),totalDeVentas: totalVentas() } ]

 /*for (let i = 0 ; i< 2 ; i++ ){ 
     console.log("largo de o km "+ concesionaria[0].autosNuevos.length)
     console.log("largo de para la Venta "+ concesionaria[0].autosParaLaVenta.length)
    console.log ("largo array ventas Precio = " + concesionaria[0].listaDeVentas.length ) }
 //console.log("concesionaria vendido "+ concesionaria[0].autosNuevos[i].marca ) }
 console.log ("el archivo de precios es = " + concesionaria[0].listaDeVentas)
 console.log("campo total ventas = " + concesionaria[0].totalDeVentas ) */
 puedeComprar("pedro","NOSE009")
