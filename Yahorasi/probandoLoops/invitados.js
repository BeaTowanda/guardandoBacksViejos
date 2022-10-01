

/*
In this exercise, we want you to take a list of names stored in an array, and put them into a guest list. But it's not quite that easy — we don't want to let Phil and Lola in because they are greedy and rude, and always eat all the food! We have two lists, one for guests to admit, and one for guests to refuse.

Specifically, we want you to:

Write a loop that will iterate from 0 to the length of the people array. You'll
 need to start with an initializer of  var i = 0;, but what exit condition do you need?
During each loop iteration, check if the current array item is equal to "Phil"
 or "Lola" using a conditional statement:
If it is, concatenate the array item to the end of the refused paragraph's 
textContent, followed by a comma and a space.
If it isn't, concatenate the array item to the end of the admitted 
paragraph's textContent, followed by a comma and a space.
LE AGREGO QUE NO PUEDE HABER MÁS DE 5 INVITADOS.. Y MENOS DE 2 RECHAZADOS */

let people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
let guest =[]
let refused =[]
let sigue= true

let i=0
let eliminados= ""
console.log("por entrar al while")
while ((i < people.length)  ) {
    console.log("el valor de i es = "+ i)
    console.log("la persona es = "+ people[i])
    switch (people[i]){
      case "Lola" :       
        refused.push(people[i])
        break;
        case "Phil" :      
        refused.push(people[i])
        break;
      case "Colin":
          eliminados = eliminados + " , " + people[i]
          break;
      default : 
        console.log("en default el invitado es = "+ people[i])
         if (guest.length < 4 ){
           console.log("en if del default"+ i + "siendo i " + people[i]+ "  es la persona")
           guest.push (people[i])   }  
        else {console.log("está en el else ")
            eliminados = eliminados + " , " + people[i] }               
        break;     }       
  i++  }
    console.log("lista de guest")
    console.table (guest)
    console.log("lista de refused")
    console.table(refused)
    console.log("y eliminados quedó como  "+ eliminados)
    

