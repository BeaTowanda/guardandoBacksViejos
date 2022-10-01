

let autos = [{marca : "Toyota", modelo :" Corolla",precio: 100000 , km: 0 , 
color:"Blanco", cuotas: 14, anio: 2019 , patente: "JJK116",vendido: false },
{marca : "Ford", modelo :" Fiesta",precio: 150000 , km: 0 , color:"Azul", 
cuotas: 12, anio: 2019 , patente: "APL123",vendido: true },
{marca : "Peugot", modelo :"New",precio: 180000 , km: 0 , color:"plata", 
cuotas: 10, anio: 2019 , patente: "DEO143",vendido: true},]

let concesionaria ={auto :{} }
 
let marca,patente,auto,color =""
let precio,km,cuotas,anio = 0
let vendido=true
function Concesionaria (auto,marca,modelo,precio,km,color,cuotas,anio,patente,vendido){
    {    
    auto: {this.marca =marca,
        this.modelo = modelo,
        this.precio = precio,
        this.km= km,
        this.color=color,
        this.cuotas= cuotas,
        this.anio= anio,
        this.patente= patente,
        this.vendido= vendido
     }  
}


function recorro (){       
    for (let i= 0; i<autos.length ; i ++){   
          
        concesionaria.auto[i]= new Concesionaria(i,autos[i].marca,autos[i].modelo,autos[i].precio,autos[i].km,
            autos[i].color, autos[i].cuotas, autos[i].anio, autos[i].patente, autos[i].vendido)       
        }}
recorro()
//console.log("la patente es = "+concesionaria.auto.marca)

//console.log(concesionaria)   
// EN PLAY DA ERROR INCREIBLE.. VEREMOS
// AHORA PIDE FILTRAR 
//patente = "APL123"
//let buscarAuto= concesionaria.filter (function (patente){
//console.log("largo a array sería si uso "+ auto.length )
function buscarAuto (patente) { 
    //console.log(" el largo es " + auto.length)
    
  for (let i= 0 ; i< 3; i++){      
  if (patente == (concesionaria.auto[i]).patente){               
         console.log("datos del auto son " + concesionaria.auto[i].color)
         i = 3 }
    
    else {console.log("No está " ) } } }
buscarAuto("APL123")

    

    




