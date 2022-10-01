
const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (tarea) {
        let tareasJSON = JSON.stringify(tarea, null, " ");
        fs.writeFileSync(this.archivo, tareasJSON);
    },
    guardarTareas: function (tarea) {
        let tareas = this.leerArchivo();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },
    leerPorEstado: function (estado) {
        let tareas = this.leerArchivo();

        let tareasFiltradas = tareas.filter(function (tarea) {
            return tarea.estado === estado;
        });

        return tareasFiltradas;
    }
}
module.exports = archivoTareas;