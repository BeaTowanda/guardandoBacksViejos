
let ahora =[{titulo:"ViaDucto Dorrego",estado: "terminado"},
{titulo: "Av Libertador",estado:"iniciado"},
{titulo:"vias tren ",estado: "pendiente"},
{titulo:"vias tren ",estado: "pendiente"}]

function filtrando(ahora) { 
let pruebaF= ahora.filter(function (elem){
      console.log(elem.estado)
    return elem.estado=="pendiente" })
    console.log(pruebaF[0].estado)
    return pruebaF
   }
pruebaF = filtrando(ahora)
console.table (pruebaF)
console.log("titulo de pruebaF es = "+ pruebaF[0].titulo)

let numArray = [1,2,3,4,5,6,7,8,9,10] 
let filterNumArray = numArray.filter(function (element) {
      return  element > 5} )

//console.log("numArray => ", numArray)
//console.log("filterNumArray => ", filterNumArray)