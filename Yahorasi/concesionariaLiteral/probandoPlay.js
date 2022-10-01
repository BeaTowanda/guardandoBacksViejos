



let autos = require ("./autos.js")

let patente =  "JJK116"

let  concesionaria = { autos: autos,

    buscarAuto: function (patente) {  
     let autos = this.autos                                               
     let autosFiltrados = autos.filter(function (auto) {
     return auto.patente === patente; } )   
     if (autosFiltrados.length===0)
     {return null}
     else  { return autosFiltrados[0]} } ,
     venderAuto: function() {     
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
            return autosN },}
       

        console.table (concesionaria.autosParaLaVenta()+ 
            concesionaria.autosNuevos())
            console.log(concesionaria.buscarAuto(patente) +
            concesionaria.venderAuto()+ concesionaria.autosParaLaVenta()+
             concesionaria.autosNuevos())
        