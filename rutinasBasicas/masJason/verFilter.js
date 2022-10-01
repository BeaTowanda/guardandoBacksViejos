
const fs = require('fs');

let ahora =[{titulo:"ViaDucto Dorrego",estado: "terminado"},
            {titulo: "Av Libertador",estado:"iniciado"},
            {titulo:"vias tren ",estado: "pendiente"},
            {titulo:"vias tren ",estado: "pendiente"}]  
console.table(ahora)   
let filtrar = function filtrarPorEstado(estado){
 //let nuevoF = JSON.parse(fs.readFileSync("./tareas.JSON", 'utf-8'));
    console.table(ahora)    
let filtrado = ahora.filter(function(elem){
        console.log("entro en filter")        
        return elem.estado == "pendiente "   })         
        return filtrado}
   // return filtrado }                                      
console.log(filtrar())  
console.log("el archivo Filtrado es = a " ) 
console.log(filtrado.titulo + "es el filtrado . titulo ")
console.table(filtrado)
//module.exports = filtrar
      
           
            
       
    

  
    
