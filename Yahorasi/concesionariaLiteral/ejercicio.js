
let autos = require ("./autos.js")

//let patenteArgv = process.argv[2]
let patenteArgv = "NOSE"

function filtraPatente (patenteArgv,autosF){    
    let autosFilter = autosF.filter (function(elem){         
        return elem.patente === patenteArgv
    })   
    console.log("en filtraPatente  " + autosFilter)
    return autosFilter }
function buscaporAuto(patenteArgv,autosF){    
    
    let buscaA = filtraPatente(patenteArgv,autosF) 
    console.log("en filyer buscaA "+ buscaA.auto)
    if (buscaA.length !== 0 ) {
        return  buscaA[0]} 
    console.log("en bucaporAuto "+ buscaA[0])    
    return null }
    


const concesionaria = { autos: autos,
    buscarAuto: function (patenteArgv) {
        let autosF = this.autos
        let buscarAuto= buscaporAuto(patenteArgv,autosF)} }
    
console.log("viendo resultados.")
console.table( concesionaria.buscarAuto(patenteArgv))



