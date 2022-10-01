
const fs = require('fs');

let archivoTareas = {
    archivo: './rutinasBasicas/masJason/tareas.JSON',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
}
module.exports = archivoTareas;