let archivoTareas = require('./funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        //for (let i = 0;  i < tareas.length; i++) {
        //    console.log((i + 1) +'. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        //}
        tareas.forEach(function (tarea, indice) {
            console.log((indice+1) + '. ' + tarea.titulo + ' - ' + tarea.estado);
        });
        console.log()
        break;

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;
    
    case 'crear':
        console.log();    
        console.log('Nueva tarea');
        console.log('------------------------------------');

        let titulo = process.argv[3];
        let tarea = {
            titulo: titulo,
            estado: 'pendiente'
        }

        archivoTareas.guardarTareas(tarea);
        console.log('Tarea guardada');
        console.log('----------------------------------------');
        break;

    case 'filtrar':

        let estado = process.argv[3];
        console.log();    
        console.log('Filtrar por ' +estado);
        console.log('------------------------------------');
        let filtro = archivoTareas.leerPorEstado(estado);

        filtro.forEach(function (tarea, indice) {
            console.log((indice+1) + '. ' + tarea.titulo);
        });
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
