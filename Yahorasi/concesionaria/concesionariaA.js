
const fs = require ("fs")
let autos = require ("./autos.js")
//const concesionaria = [{ autos: require("./autos.js ")}] 
const concesionaria = [{ autos: autos}]
console.table(concesionaria)
