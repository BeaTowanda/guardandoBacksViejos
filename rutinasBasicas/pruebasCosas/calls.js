let sumar =( num1,num2 )=> num1+num2
let restar =(num1,num2) => num1-num2
let multiplicar= (num1,num2) => num1*num2
let dividir= (num1,num2)=> num1/num2
let padre = (num1,num2,opera) => opera(num1,num2)
console.log(padre(10,2,sumar))
// otro ejercicio...saludar duda.. SE PUEDE PONER SALUDAR COMO FUNCION FLECHA
let nombreCompleto = (nombre,apellido) => nombre + " "+apellido
function saludar (nombre,apellido,funcion ){
    return "Hola "+ funcion(nombre,apellido) + " bienvenido"
}
console.log("con funcion flecha sale : " + saludar("Bea","Gonz",nombreCompleto))
function todoElNombre (nombre,apellido){
    return nombre + " "+ apellido
}
function saludo(nombre,apellido,funcion){
    return "Hola " + funcion(nombre,apellido) + "!!"
}
console.log(saludo("Aldo","García",todoElNombre))
// ejercicios callbacks
/*Pasar un callback
Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.

La primera función se llamará doble. Esta recibirá un número y retornará el doble.

La segunda función se llamará triple. Esta recibirá un número y retornará el triple.

La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. 
Esta retornará el valor de aplicar dicha función al valor que recibió.

Ejemplo:

aplicarCallBack(2, doble); // 4
aplicarCallBack(4, triple); // 12*/
// este en el playground no lo aceptó , le cambié num1 por numero y aun a´si
let doble = (num1)=>num1*2
let triple = (num1)=>num1*3
function aplicarCallBack(num1,funcion1){
    return funcion1(num1)
}
console.log(aplicarCallBack(2, doble))
console.log(aplicarCallBack(4, triple))
/*
Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos de un array. 
Para esto debemos completar la función procesar. Esta recibe dos parámetros:
1. El primer parámetro es un array.
2. El segundo parámetro que recibe es una función (al que solemos llamar callback).
La función deberá retornar un array donde cada elemento es el resultado de aplicar la función pasada a un elemento del array pasado.
Dejamos unas funciones para comprender y probar con el ejemplo:
  let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
  console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
  let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
  console.log(largoDeElmentos); // imprime [ 14, 13 ]*/
  console.log("EJERCICIO HTTP")
   
let urlCompletas = (elemento) => elemento = "http://"+elemento 
let largoDeElmentos = (elemento)=> elemento.length
function procesar(array,callback){
    let elemento =""
    for (let i = 0;i<=array.length-1;i++){
    elemento=(array[i])
    array[i]= callback(elemento)
    }      return array }

//console.log("resultado de procesar es lo que viene abajo")
console.log(procesar(["www.google.com","www.yahoo.com"],largoDeElmentos))
//console.log("el array es ahora = "+ array)
console.log(procesar(["www.google.com","www.yahoo.com"],urlCompletas))
//console.log("después de url el resultado es = " + array)
// si quiero un array con los nuevos datos.. se lo tengo que asignar al array
// o bien el mismo array ya que le paso los datos directos...entonces podría poner
// let array= procesar.....
let nuevoArray = procesar(["www.google.com","www.yahoo.com"],urlCompletas)
console.log("ahora nuevo array es = "+ nuevoArray)
// en el playground exigieron que se hiciera con function pero con flecha se puede
  //===================================
  // USO DEL SWITCH
  /* acordarse que puedo con un case hacer uno solo y cierro llaves, o hacer varios casos y voy cerrando
  llaves o voy anidando uno a uno y recién cierro llaves */
  /*Utilizando switch deberemos evaluar si la variable "día" es lunes, miércoles o viernes; 
  y, en ese caso, debe imprimir el texto "tenés clases". Para cualquier otro caso debe imprimir "no tenés clases".*/
  
function tengoClases(dia) {
	switch (dia) {
        case "lunes":
        case "miércoles":
        case "viernes":console.log( "tenés clases")
        break
        default : console.log("no tenés clases")
    	// el default puede o no usar el break.. no es necesario pero tpco lo rechaza
	}
}
console.log(tengoClases("miércoles"))








