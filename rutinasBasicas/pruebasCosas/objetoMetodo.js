
const persona = {
    nombre: ['Bob', 'Smith'],
    edad: 32,
    genero: 'masculino',
    intereses: ['música', 'esquí'],
    bio: function () { console.log(this.nombre.length)
        for (let i= 0 ; i< this.nombre.length ; i++){
            console.log("elemento nombre = "+ i + this.nombre[i])
        }
      console.log (this.nombre[0] + '' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
    },
    saludo: function() {
      console.log ('Hola, Soy '+ this.nombre[0] + '. ');
    }
  }
  persona.nombre
persona.nombre[0]
persona.edad
persona.intereses[1]
persona.bio()
persona.saludo()
