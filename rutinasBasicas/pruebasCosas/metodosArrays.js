

// EMPIEZO CON MAP MEJOR
console.log("ejemplo de método MAP ")
let arrayMap=["casa","puente","cigarrillo"]
let arrayConHttp = arrayMap.map(function(elem){
    return elem + "http"
})
console.log(arrayConHttp)
// ahora pruebo que pasa con un array objeto literal
console.log("ahora MAP CON OBJETO LITERAL ")
// duda con Profe como declarar varios valores de un objeto literal
let casas = [
    {tipo: 'moderna', altura: 2855, calle: "Sucre",barrio:"Lanus"},
    {tipo: 'antigua', altura: 2500, calle: "Niceto",barrio:"Palermo"}, 
    {tipo: 'antigua', altura: 2300, calle: "Sucre",barrio:"Lanus"},
    {tipo: 'moderna', altura: 2700, calle: "Thames",barrio:"Palermo"}]
// voy a probar que si el barrio es Lanús le agregue Provincia
let casasConPcia = casas.filter(function(elem){
//    if (elem.barrio == "Lanus"){
//       return ( elem.calle )+(elem.altura)+(elem.barrio+ " Pcia BsAs")}}) 
       // return elem.barrio == "Lanus" ? elem.barrio+ " Pcia BsAs": "" 
// ahora con filter.. lo de arriba es con MAP y está en BIBLIOTECA
        return elem.barrio == "Lanus" })


console.log("aquí llamo a casasConPcia =    " +casasConPcia)
console.log("el array original queda = ", casas)
console.log(casasConPcia[0],casasConPcia[1] )
  // aquí voy al ejercicio APROBADOS DESAPROBADOS
  // dado un Array armar lista con aprobados,desaprobados
// Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.

  let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]  
let aprobados = estudiantes.filter(function(elem){
    if (elem.aprobado == true) {
        return elem }})   
console.log(aprobados)
let desaprobados = estudiantes.filter(function(elem){
    if (elem.aprobado==false) {
        return elem  } } )
console.log("el array de desaprobados es :") 
console.log(desaprobados)
// SALIDA DIVINA CON LOS CAMPOS .. Y DIÓ BIEN EL PLAYGROUND
//=================
// ahora ejercicio salida de aviones
/*Nos dejaron una lista con los horarios de partida de algunos aviones
. Esta lista se reproduce directamente en las pantallas del aeropuerto y, 
a modo de travesura, queremos adelantar una hora cada partida. Nuestro 
trabajo será utilizar el método map para poder lograrlo y almacenar la
 lista en una variable nueva llamada horariosAtrasados.*/
 let horariosPartida = [12, 14, 18, 21]
 let horariosAtrasados = horariosPartida.map(function(hora){
     return hora -1
 })
 console.log(horariosAtrasados)
 //===============================
 // NUEVO EJERCICIO.. PARA USAR REDUCE Y DAR EL TOTAL DE VUELTAS DE UNA CORREDORA
 //Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, 
 let vueltas = [5, 8, 12, 3, 22]
 let totalVueltas = vueltas.reduce(function(acum,vuelta){
     return acum + vuelta
 })
console.log(totalVueltas)
//=================================
// solamente imprimir por consola.y usar el foreach
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
let lista = listaDeSuperMercado.forEach(function(elem){
    console.log(elem)})
//==============================
// OBJETO DATE,MOMENTO,MONTH YEAR
// FECHA ACTUAL
let fechaActual = new Date()
console.log(" este devuelve la función DATE " + fechaActual)
let fecha1 = new Date()
let dia= fecha1.getDate()
// acordarse que mes.. como empieza en 0 hay que sumarle 1
let mes1 = fecha1.getMonth()+1
let diasemana = fecha1.getDay()
let anio = fecha1.getFullYear ()
console.log(dia + "así sale el día de la semana,domingo =0")
console.log("para saber si es lunes o que dice ;"+ diasemana)
console.log("el mes sale así "+ mes1)
console.log("así sale el año"+ anio)
//=================
// si quiero asignara fecha hago lo de abajo.. acordarse anio/mes/dia
// ver temas format para que salga lindo
let fechacumple = new Date(1959,7,11)
console.log("asignando fechas ",fechacumple )
/*En este ejercicio ya vamos a tener disponible la fecha en la variable fecha y,
 utilizándola, debemos imprimir el siguiente mensaje:

"Hoy es el día XX del mes YY del año ZZZZ", donde XX es el número del día, YY es 
el número del mes y ZZZZ es el número del año. 

Ejemplo de cómo podría verse una fecha con este formato:

"Hoy es el día 0 del mes 4 del año 2019"

Funciones de Date que nos van a ayudar:

getDate()
getMonth()
getFullYear()*/
console.log("EJERCICIO DATE DE ULTIMO MODULO ")
let fecha = new Date()
let mes = fecha.getMonth()+1
console.log("Hoy es el día "+fecha.getDate()+ " del mes "+ mes +" del año "+ fecha.getFullYear() )
// ==========================================
/* DESTRUCTURING */
console.log("========== D E S T R C T U R I N G ===============" )
let arrayDestru = ["invocar","siempre","mismo","array"]
let [invocar1,siempre1,mismo1 ]= arrayDestru
console.log ("ahora si llamao a las variables : "+invocar1,siempre1,mismo1)
console.log("=======================")
  let estudiantes1 = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false}]

console.log(estudiantes1)
let {nombre,promedio}= estudiantes1[0]
console.log("para la linea [0] el nombre es : " + nombre)
console.log(" y el promedio = " + promedio)
/* ahora intento con un arraay que tiene algunas variables objetos*/
let arrayCursos = ["Full Stack",{lenguaje : "js",curso: 1,anio:2022}, "playground"]
let [fs,,usaplay]= arrayCursos
console.log(fs,usaplay)
let {lenguaje,curso}= arrayCursos[0]
console.log(lenguaje,curso)
// LA PARTE DEL OBJETO LITERAL ME DA INDEFINED
//====================================
// ejercicio Playground
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [,bariloche,,china]= destinosDelMundo
console.log(bariloche,china)
//==========================
// spread operator
let arrayDias = ["lunes","martes","miércoles","jueves"]
let clases= ["full","java","NODJS","metodos"]
let nuevoDias = [...arrayDias,...clases]
console.log(nuevoDias)
// AHORA CON OBJETOS
let alumnos = { nombre:"Juan",
                curso : "FULL",
                turno : "noche"}
                
let cursosAlum = {dia : "m y j",
                  incicia : "diciembre"}  
let cursosCompleto = { ... alumnos,...cursosAlum}
console.log(cursosCompleto)
// AHORA SPREAD OPERATOR CON FUNCIONES
// uso el mismo de alumnos pero le agrego año
console.log("================================")
console.log ("SPREAD OPERATOR CON FUNCIONES ")
let alumnos1 = { nombre:"Juan",
                curso : "FULL",
                turno : "noche"}
                
let cursosAlum1 = {dia : "m y j",
                  inicicia : "diciembre"}
function queCurso (...cursosPorAlumno){
    console.log("entró a function")
    for (let i=0 ; i<= cursosPorAlumno.length-1; i++){
        console.log("nombre.leng : "+ cursosPorAlumno.length)
        console.log("el i = "+i)
        console.log("en for i datos"+nombre)
        console.log( "este alumno :  "+ nombre + "ya cursó : "+ curso)
    }
}
let cursosPorAlumno =[{nombre : "juan",curso : "full"},{nombre: "esteban",curso:"html"},
{nombre: "Teresa", curso:"java"}]
let salidaCursos = queCurso(cursosPorAlumno)
console.log(salidaCursos)
//===============00000 el de arriba NO DA.. NO ENTIENDO COMO HACER
//==============--- hago otro ejercicio para verlo
// películas
let pelis = ["harry","rápido","directora ", "sol de medianoche"]

//function pelisVistas (...pelis){
//    return  (console.log("vio "+ pelis))}

//let vioArray= pelisvistas()
//console.log("el array es "+ pelis)
//console.log(vioArray)
function f() {
    return [1, 2];
  }
    let a, b;
  [a, b] = f();
  console.log(a); // 1
  console.log(b); // 2
  //===========
  function pelisvistas(...pelis){
       pelis !== "harry" ? return pelis : "" }

  let vistas = pelisvistas(pelis)
console.log(vistas)
let pruebaArray=[100,500,800,900]
let nuevo = pruebaArray
console.log(nuevo)




    










