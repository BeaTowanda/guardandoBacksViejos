
//let archivoTareas = require('./rutinasBasicas/masJason/funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
//let accion = process.argv[2]; 
/* PUSE ARGV[3]PARA AL INGRESAR COMANDO DESDE TERMINAL
NO ME INGRESE A LOS DOS.. O SEA TENDRIA QUE ESCRIBIR LISTAR LISTAR*/
/* ESTO ERA LA PRIMERA PARTE.. EL CASE AHORA LO VEO ABAJO
switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        for (let i = 0;  i < tareas.length; i++) {
            console.log((i + 1) +'. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        }
        console.log()
        break;

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}*/
/*======================================================
// HAGO LO MISMO PERO FOREACH*/
let archivoTareas = require('./rutinasBasicas/masJason/funciones1DeTareas')
console.log("================================================")
console.log ("idEM IDEM PERO CON FOREACH")
console.log("================================================")
//accion = process.argv[2]
// VOY A PROBAR RECIBIR LA FRASE “escribir json” y “guardar el archivo actualizado”.

//let accion = process.argv[2]
let accion  = require('./rutinasBasicas/masJason/leerArgv.js');
const filtrar = require('./rutinasBasicas/masJason/tareas1.js');
const agregar = require('./rutinasBasicas/masJason/tareas1.js');

console.log("el comando desde terminal es = " +accion)
switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        console.log("usando FOREACH")
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach(function(element) {
            console.log("Título : " +element.titulo + ' Estado : ' + element.estado)             
        });        
        console.log()
        break;
    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar,crear archivo y grabar archivo');
        console.log('----------------------------------------');
        break;
    case "crear":
        console.log();    
        console.log('aquí haremos la accion de crear archivo')
        let nuevo = {titulo: accion,estado:"pendiente"}
        let proceso = require('./rutinasBasicas/masJason/tareas1.js')
        agregar(nuevo)
        console.log('');
        console.log('----------------------------------------');
        break;
    case "filtrar":
        console.log();    
        console.log('aquí seleccionaremos ESTADOS pendientes ')        
        let estado = process.argv[3]
        let filtrando  = require('./rutinasBasicas/masJason/verFilter.js')    
        console.log ("filtrado queda "+ filtrando)
        for (let i= 0; i< filtrando.length ; i++){
            console.log(filtrando[i]) 
        }
        //filtrando.forEach(function(elem){             
        //    console.log("el nombre es : " + elem.nombre + "tiene perro ") } )
        //let nuevo = {titulo: accion,estado:"pendiente"}
        //let proceso = require('./rutinasBasicas/masJason/tareas.js')
        //agregar(nuevo)
        console.log('');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}

/* AHORA VOY A INTENTAR ESCRIBIR UN JSON Y GUARDAR QUE DEBERÁN SER DOS FUNCIONES 
DISTINTAS */
// escribir un json 
/*let archivoTareas = require('./rutinasBasicas/masJason/funcionesDeTareas');
esto está arriba )
 let tareas = archivoTareas.leerArchivo();
 let archivoTareasA = {
    archivo: 'tareasJasonA.JSON',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
}y ya llamé a la función parse en LEER ARCHIVO */

//function escribirJason (archivoTareas)


