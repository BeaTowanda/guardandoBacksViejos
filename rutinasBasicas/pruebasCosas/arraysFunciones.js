// como tiene 1 SOLO elemento NO uso {} ni return
// si tiene más hay que usarlo
let laMitad = numero => numero/2
console.log(laMitad(5))
// pruebo con más operaciones
let tengoClases =(mes,dia)=> {
    if ((mes!==12) && ((dia == "martes")||(dia =="jueves"))){
        return "tenés clases"}
    else { return "relajate"}
    }
console.log(tengoClases(12,"martes"))
// ejercicio transformar funciones en arrowsfunctions
let  dameCinco = numeros=> [1,2,3,4,5]
console.log(dameCinco(5))
let multiplicarPorDos = resultado=> 123*2 
console.log(multiplicarPorDos())
let  mostrarNombre = nombre =>"Mi nombre es Hernán" 
console.log(mostrarNombre())
/// saludar
let saludar= (nombre, apellido)=> 
    'Hola, ' + nombre + ' ' +  apellido + '!'
console.log("Juan","Perez")

// IF TERNARIO..SIN IF
// NO USA CORCHETESSSSSSSSSS

let saludonuevo= (nombre, apellido)=> 
    apellido !== NaN ? ('Hola, ' + nombre + ' ' +  apellido + '!' ): "datos inválidos" 

console.log(saludonuevo("Juan","Perez"))
// está dando indefinido
let saludoOk = (nombre,apellido) => 
    apellido == "Perez" ? "es gallego" : "otro país"

console.log(saludoOk("teresa","Perez"))

// swicht
//let dia = 'jueves'
//function finDeSemana (dia) {	
/*	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
} hay que usar swicht*/
let dia="jueves"
switch (dia) {
    case "viernes": console.log("buen finde")
    break
    case "lunes" : console.log("buena semana")
    break
    default: console.log("buen dia") 
}

function clases (dia){
    switch (dia){
        case "lunes" || "miércoles" || "viernes" : console.log("tenés claes")
        break
        default : console.log("no tenés claes")
        break }
    } 
clases("sábado")

// usar if ternario y definir cual es la bicicleta con rodado más grande
console.log ("ejercicio rodado más grande ")
let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}
let bicicletaConRodadoGrande = {
    rodado:0,
    marca:""
}
console.log(bicicletaB.rodado)
bicicletaB.rodado > bicicletaA.rodado ?  bicicletaConRodadoGrande.marca= bicicletaB.marca : ""
// acordarse que si no pongo "" después de puntos.. es como que NO ejecuta el if ternario
 console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca )

 // algunos ejercicios simples de for
 // contando impares de 0 a x 
/*//noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad
 de números impares que hay desde el número 0 hasta el número X (inclusive) y 
luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .*/
function noParesDeContarImparesHasta(x){
   let contador =0
   for (let i= 1 ; i <= x ; i++) {
       i %2 !== 0 ? contador++ : ""
       console.log("valor de i = "+ i)
       console.log("contador = "+ contador)
   }
 return contador
}
console.log(noParesDeContarImparesHasta(10))

/*/////////////////////////////////////////////////////////// */
// F O R E A C H 
console.log("EJEMPLO FOREACH ===============================")
console.log(" ===============================")
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
    // acordarse QUE SIEMPRE FOREACH RECIBE UNA FUNCTION 
    // acordarse que abre paréntesis, declara la función y cierra el paréntesis
    // LUEGO DE TERMINAR LA FUNCIÓN 


