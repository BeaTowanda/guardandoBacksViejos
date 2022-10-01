// como creo un Objeto Literal
// palabras New y this
function HorariosDias (dia,turno,actividad) {
    this.dia = dia
    this.turno = turno
    this.actividad = actividad

}
let semana12= new HorariosDias ("lunes",["mañana","tarde","noche"],["forex","js"])
console.log("así queda el array " +semana12)
console.table(semana12)

/// ahora declaro objeto literal PERRO
let perro = {
    nombre:"",
    edad:Number(),
    vacunado:true     
}
console.log(perro)
// PARA ABAJO EL EJERCICIO ENTRENAR 
//io contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: nombre, energia, experiencia.

//Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.

//La función entrenarHoras tiene las siguientes tres características:

//Recibe por parámetro la cantidad de horas.
//Resta a su energía (this.energia) la cantidad de horas x 5.
//Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
//Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y 
//experiencia del deportista por consola.
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function  entrenarHoras(horas) {
        this.energia= deportista.energia - (horas*5)
        this.experiencia = deportista.experiencia +(horas*2)
    
    }
};

/*console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);

console.log(deportista)*/

let amigos = {
    nombre : String(),
    edad : Number(),
    perro : true
}
console.log(amigos)
console.log("nombre =" + amigos.nombre)
let dia="jueves"

switch (dia) {
    case "viernes": console.log("buen fin de semana")
   break
    case "lunes" : console.log("buena semana")
    break
    default: console.log("buen dia") }

    /*=================================================*/
    
    // PRUEBA FILTER =========================*/
    console.log("---------------------------------------")
    console.log("---------------------------------------")
    console.log("----------------PRUEBA FILTER. PERRO -----------------------")
    console.log( "-------------- filter ------------------")
    let amigosFilter =[{ nombre : "Juano", edad : 30, perro : true},
    { nombre : "Pepe", edad : 30, perro : false},
    {nombre : "Ester", edad : 30, perro : false},
    {nombre : "Lia", edad : 30, perro : true},
    {nombre : "JPancho", edad : 30, perro : false} ]

console.log("---------------------------------------")
console.log("---------------------------------------")
console.log("----------------PRUEBA FILTER. PERRO -----------------------")
    let filtrado = amigosFilter.filter(function (amigosFilter){   
             return amigosFilter.perro == true }) 
        console.log("el array FILTRADO ES después de Filter") 
        console.log(filtrado)        
        filtrado.forEach(function(elem){             
        console.log("el nombre es : " + elem.nombre + "tiene perro ") } )
        console.log("después de FOREACH")       
        console.table (amigosFilter)
        console.log("y el nuevo array filtrado es ")
        console.table(filtrado) 
        
     

  

    