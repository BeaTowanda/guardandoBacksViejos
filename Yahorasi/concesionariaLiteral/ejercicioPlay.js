
/*let autos = require ("./autos.js")

let patente = "NOSE009"
const concesionaria = { autos: autos,
    buscarAuto: function (patente) {   
        let autos= this.autos                                              let autos=this.autos;
        let autosFiltrados = autos.filter(function (auto) {
        return auto.patente === patente; } )   
        if (autosFiltrados.length===0)
         {return null}
        else { console.log (autosFiltrados[0])
         return autosFiltrados[0]} } ,} 


console.table(concesionaria.buscarAuto(patente) )*/

const personas = require("../concesionaria/personas.js")
let autos = require ("./autos.js")
//let personas = require("./personas.js")

let patente = "APL123"
let persona ={
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 300000,
    }

let auto = {marca : "Toyota", modelo :" Corolla",precio: 30000 , km: 5000 , 
color:"Blanco", cuotas: 14, anio: 2019 , patente: "JJK116",vendido: false }
//=======================================

function escriboconFor(){
    // modifica campo vendido por true en archivo autos
    for (let i= 0 ; i <autos.length ;i++){   
        if (autos[i].patente == patente){
            autos[i].vendido = true           
            i=autos.length } }   
    return autos}
               
           
//=============================================================
let  concesionaria = { autos: autos,
    // viene campo buscarAuto
    buscarAuto: function (patente) {  
     let autos = this.autos                                               
     let autosFiltrados = autos.filter(function (auto) {
     return auto.patente === patente; } )   
     if (autosFiltrados.length===0)
     {return null}
     else  { return autosFiltrados[0]} } ,
     venderAuto: function() {
         // viene buscarAuto asignar estado de vendido usando buscar auto     
            if (this.buscarAuto(patente)!== null){  
                for (let i= 0 ; i <autos.length ;i++){   
                    if (autos[i].patente == patente){
                        autos[i].vendido = true           
                        return autos[i].vendido } }          
             return autos} }, 
     autosParaLaVenta : function(){                                                           
            let autosFiltrados = autos.filter(function (auto) {
            return auto.vendido === false; } )
        return autosFiltrados },
     autosNuevos : function(){                     
            let autosN = this.autosParaLaVenta().filter(function(auto) {   
                return auto.km < 100 } )
            return autosN },
    listaDeVentas : function(){         
        let autosFiltrados = this.autos.filter(function(auto){
            return auto.vendido == true})     
        let lista = []
        for (const{precio}of autosFiltrados){                                     
               lista.push(precio)}
        return lista } ,
    totalDeVentas :function(){
            let total=0 
        if (this.listaDeVentas().length !== 0){
            total = this.listaDeVentas().reduce(function (acum,valor){
            return acum + valor })}         
        return total } ,
    puedeComprar : function(auto,persona){        
        if ((auto.precio <= persona.capacidadDePagoTotal) && 
        ((auto.precio/auto.cuotas) <=persona.capacidadDePagoEnCuotas) ){
            return true}
        else { return false}} ,
    autosQuePuedeComprar: function(persona){
        
        let autosVenta= this.autosParaLaVenta()
        let autosFiltrados = autosVenta.filter (function (auto){
            return concesionaria.puedeComprar(persona,auto)
        })
        return autosFiltrados} ,}
      
        
                             

                   
 console.log("autos queda " + concesionaria.autos)
 console.log ("ahora los llamo")
   console.log(concesionaria.buscarAuto(patente) +
    concesionaria.venderAuto()+ concesionaria.autosParaLaVenta()+ concesionaria.autosNuevos())
   console.log ("lo que salió es como queda")
   console.table (concesionaria.autosParaLaVenta())
   console.log("ahora viene la tabla de autos nuevos ")
   console.table(concesionaria.autosNuevos())
   console.log("lista de ventas = ")
   console.table(concesionaria.listaDeVentas())
   console.log(concesionaria.totalDeVentas())
   console.log("ahora si puede comprar auto")
   console.log(concesionaria.puedeComprar(auto,persona))
   console.log("ahora los autos que puede comprar una persona resultado final")
   console.table(concesionaria.autosQuePuedeComprar(persona))
   
   //concesionaria.listaDeVentas()




