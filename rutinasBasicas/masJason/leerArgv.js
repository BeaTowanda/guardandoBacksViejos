
let comando = process.argv
let salida = ""

//console.log("el comando es = " + comando)
// 1 ahora lo desmenuzo
if (comando.length > 3) {
   
    salida = comando[2]
    accionAcumplir = comando[3]
    
    //return salida
} 
else if (comando.length == 3){
    salida = comando[2]
}
module.exports = salida;

