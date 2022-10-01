

let autos = require ("./autos.js")
//let personas = require("./personas")

let patente = "APL123"
let persona ={
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000,
    }

let auto = {marca : "Toyota", modelo :" Corolla",precio: 100000 , km: 5000 , 
color:"Blanco", cuotas: 14, anio: 2019 , patente: "JJK116",vendido: false }
function leoconFor(){
    for (let i= 0 ; i <autos.length ;i++){
      
        if (autos[i].patente == patente){
            autos[i].vendido = true
          
            i=autos.length }
         } 
    return this.autos}

    // como desestructurar UN ARRAY DE OBJETOS LITERALES
    lista = []
    for (const{precio}of autos){
       lista.push (precio)
   }
   console.log (lista)
//=====================================
//const found = array1.find(element => element > 10);

// ULTIMO PUNTO PRUEBO COM ARMAR DOS OBJETOS LITERALES JUNTOS
let autosx={marca:"Ford",precio:50000,cuotas:10}
let personax = {nombre:"Pedro",puedehasta:80000}
let final = {autosx,personax}
console.table(final)

let autosPruebo=[{ marca:"Ford",precio:50000,cuotas:10}, {marca:"loco",precio:80000, cuotas:10}, 
{ marca:"Peugeot",precio:5000,cuotas:10},]
console.log("usando new RegExp(autospruebo")
console.log(new RegExp(autosPruebo))
let ver= new RegExp(autosPruebo)
console.log(ver)
console.log("y ahora veo que objetos son ")
console.log(ver.marca)
//============== ESTÁ BUENO COMO DECLARA VARIABLE GLOBAL Y USA EL TEST
let encuentro = autosPruebo.find(elem =>{
        return (/Fo/g).test(elem.marca ) } )
console.log(encuentro)
//==================0
// AHORA PRUEBO EL MAP
let encuentroMap = autosPruebo.map(function(item ){
    item.precio = item.precio * 1,21
    return item
})
console.log("asi quedan ambos primero imprimo autosPruebo")
console.table(autosPruebo)
console.log("y el valor retornado de map que es encuentroMap queda")
console.table(encuentroMap)
// ==== AHORA PRUEBO QUE NOOO CAMBIE EL ARRAY ORIGINAL 
encuentroMap = autosPruebo.map(function(item ){
    let nuevoPrecio = item.precio * 1.21
    return {...item,precio:nuevoPrecio} })
    //==   
    console.log ("======== ahora que solo cambie el array de salida ")
    console.log("asi quedan ambos primero imprimo autosPruebo")
    console.table(autosPruebo)
    console.log("y el valor retornado de map que es encuentroMap queda")
    console.table(encuentroMap)
    // == así sale el valor original autosPruebo y la salida (encuentroMap )con precio modificaado
//===============
// ======== PRUEBO EVERY que comprueba SI TODOS LOS VALORES CUMPLEN y DEVUELVE TRUE O FALSE
let comprueboPrecio = autosPruebo.every(item =>{
    return item.precio >= 10000 })
console.log(comprueboPrecio)
// ========== pruebo el SOME es decir que alguno cumpla la condición 
let comprueboSome = autosPruebo.some(item =>{
    return item.precio >= 60000 })
console.log (comprueboSome)
// devuelve TRUE
//==================0
//================= REDUCE VER BIEN EL VALOR DEL ACUMULADOR ==========
let sumoPrecios = autosPruebo.reduce((total,item) =>{
    return total = total + item.precio} ,0)
console.log(sumoPrecios)
//====================000
var a = "camila"
var b = parseInt(a)
console.log(b)
//== lo de arriba da como resultado NaN
//=======================================
let variosMeses = {enero:31,feberero:29,marzo:30,abril:31,clase :10,anio:21}
for (var mes in variosMeses){
    console.log("mostrando el for in ")
    console.log(mes)
}
// accediendo con for in al valor de las propiedades
for (var mes in variosMeses){
console.log("ver como accedo al valor de la propiedad  "+ variosMeses[mes])}
// ahora bien completo el for in
for (var mes in variosMeses){
    console.log("el campo de objeto es: "+ mes)
    console.log("y el valor del mismo es :  "+ variosMeses[mes]) }
//==================
// aquí hago el de la bicicleta del playground que da error
// con if ternario

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"}


 let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado ? bicicletaA.marca :
  bicicletaB.marca
  console.log (bicicletaConRodadoGrande+ "es el resultado ")

  // ========= otra vez el ejercicio fecha
  let fecha = new Date()
  let mes1 = fecha.getMonth() + 1


  //console.log("Día: "+fecha.getDate())
//console.log('Hoy es el día '+fecha.getDay()+' del mes '+mes1+ "del año "+ 
//fecha.getFullYear())
console.log(mes1 + " el mes es ")
console.log("el mes es = "+ (fecha.getMonth()+1) )
console.log("el año es = " + fecha.getFullYear())
console.log("el day o se dia de la semana es = "+ fecha.getDay())











//====================0 SEARCH PERO NO FUNCIONA Y LO INSTALÉ POR NPM
/*str=[100,200,300,500,1100]
re  = 300
function testinput(re, str) {   
        var midstring;
        if (str.search(re) != -1) {
          midstring = ' contains ';
        } else {
          midstring = ' does not contain ';
        }
        console.log(str + midstring + re);
      }
 testinput(re,str)*/










  
        
  


/*console.log ("archivo autos antes  ")
console.table(autos)
console.log("leo con for " + leoconFor())
console.table(autos)
//console.log("ahora después de escribir " + escribirAuto(patente))*/
