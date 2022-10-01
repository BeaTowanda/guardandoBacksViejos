
let fs = require("fs")
let archivoTareasA = {
    archivo: 'tareasJasonA.JSON',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
}
//let salidaA = fs.readFileSync("./rutinasBasicas/masJason/tareasJasonA.JSON")
//let archivoDeTareasA = JSON.parse(salidaA)
/*for (let i = 0 ;i <= archivoDeTareasA.length-1 ; i++){
    console.log("el capítulo :"+archivoDeTareasA[i].capitulo + " - y la seccion : "+ archivoDeTareasA[i].seccion)
}

console.log(archivoDeTareasA)
module.exports = archivoDeTareasA;*/
function listarTareas (archivoDeTareasA) {
    //foreach.archivoDeTareasA {
        console.log("El capitulo es : "+ archivoDeTareas.capitulo + "la seccion es "+ archivoDeTareas.seccion)
    }

module.exports = listarTareas()









