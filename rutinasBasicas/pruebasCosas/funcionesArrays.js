let frase = "ser mal vecino es también   "
console.log(frase + "así sin prim()")
console.log (frase.trim())
// frase.split(" ") esto ASÍ NO SE HACE. .SOLO ADMITE LUEGO DE LA FRASE
let arrayFrase = "aquí nadie se calienta por nada".split()
console.log(arrayFrase + "así quedó ")
let arrayVer = ["juan","pedro","sol"]
console.log(arrayVer)
console.log("si ahora hago split con comillas")
arrayFrase = "aquí nadie se calienta por nada".split(" ")
console.log(arrayFrase)
let arrayNumeros="123 456 788".split()
console.log(arrayNumeros)
// si ahora le pongo comillas al splitnod
arrayNumeros= "55 2363 888 ".split(" ")
console.log(arrayNumeros + "  así queda")
//let arrayRepla= [ "casa", "donde vive", "juan"]
//arrayRepla.replace("donde vive","es propiedad de ")
//console.log(arrayRepla)
let fraseRepla = "la casa donde vive Juan"
fraseRepla.replace("casa","loft")
console.log(fraseRepla)
// como está arriba no modifica Y CON ARRAY NO RECONOCE COMO FUNCION DE ARRAY
let fraseRepla2= "estoy en la compu probando"
let devuelve= fraseRepla2.replace("compu","casa")
console.log("ahora ver que retorna función replace  : "+ devuelve)
console.log("y la string queda : "+ fraseRepla2)
// IMPORTANTE...NOOOO MODIFICA LA VARIABLE STRING.. SOLO DEVUELVE
//----------- ahora abajo la función include
console.log(fraseRepla2.includes("feo"))
console.log("ahora con lugar "+ (fraseRepla2.includes("compu",1)))

if (fraseRepla2.includes("feo")){
    console.log("está en el IF ")
    console.log("salió el includes")}
else {console.log("está en else")}

// ahora quiero verificar lo de la long de un string
let nuevaFrase = "hoy toco java"
console.log("longitud nuevaFrase es : " + nuevaFrase.length)
// 
// AHORA PRUEBO EJERCICIO DE STRING ESTO ES MALA ONDA
function reemplazoFastFast(textoSinGuiones,buscar,reemplaza) {
    let posicion = 0
        posicion=textoSinGuiones.indexOf(buscar)
    if (posicion !==-1){
      texto2 = textoSinGuiones.slice(0,posicion)+reemplaza+textoSinGuiones.slice((posicion+(buscar.length)),(textoSinGuiones.length))
            /*+ reemplaza +" "+ textoSinGuiones.slice(posicion+1,textoSinGuiones.length-1)*/
      return textoSinGuiones.slice(0,posicion)+reemplaza+textoSinGuiones.slice((posicion+(buscar.length)),(textoSinGuiones.length)) }
    else {return "no se encuentra"} }    
  let buscar = "mala"
  let reemplaza = "buena"
  let textoSinGuiones= 'Este texto es mala onda'
  reemplazoFastFast(textoSinGuiones,"mala","buena")
  // ver que slice NO modifica el valor original. sino genera otro 
  console.log("el texto original queda : "+ textoSinGuiones)

  







