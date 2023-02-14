//Declaramos variables como objetos que recibiran propiedades con su respectivo valor
let persona1 = {
    id: 1,
    nombre: 'Rick',
    apellido: 'Grimes',
    telefono: '+1 269 566 45',
    ubicacion: {
        ciudad: 'Atlanta',
        direccion: 'zombie Avenue'
    }
}

let persona2 = {
    id: 2,
    nombre: 'Ragnar',
    apellido: 'Lothbrok',
    telefono: '+562 269 566 45',
    ubicacion: {
        ciudad: 'Kategat',
        direccion: 'Montes de odin'
    }
}

//luego declaramos nuestra variable (en este caso AGENDA) que tendra dentro de un Array las variables previamente declaradas con todos sus atributos y valores

let agenda = [persona1, persona2];

//Declaramos una funcion para agregar nuevos contactos que recibiran como propiedades los datos necesarios de nuestro contacto a agregar

function nuevoContacto(id, nombre, apellido, telefono, ciudad, direccion){
    //dentro de la funcion, como objeto declaramos nuestra variable (persona) que sera igual a un objeto con los datos requeridos para posterior mente convertirse en parametro del ".pus" para que la funcion cumpla su objetivo (si nuesta variable se llamara agua, el parametro que reciba ".push" debera ser agua: .push(agua))
    let persona = {
        id,
        nombre, 
        apellido,
        telefono,
        ubicacion: {
            ciudad,
            direccion
        }
    }
    agenda.push(persona)
}

//invocamos nuestra funcion previamente declarada y le damos los datos que anteriormente ordenamos que pidiera: id, nombre, apellido...

nuevoContacto(3,'Son', 'Goku', '+89 555', 'Japon', 'Montaña paoz')

// y al hacer console.log nos damos cuenta que nuestro contacto ha sido agregado satisfactoriamente

//Para eliminar contactos declaramos una funcion que lleve por nombre nuestra accion, y esta recibira por parametro el id del contacto que queremos borrar, seguido de esto con un "for" indicamos con una condicional lo siguiente: Si en mi agenda el indice del id de mi contacto es igual al id que recibe por parametro, entonces con la funcion .splice borrame dicho indice.

function eliminarContacto(id){
    for (let i = 0; i < agenda.length; i++) {
        if (agenda[i].id === id) {
            agenda.splice(i, 1)
        }   
    }
}

function actualizarContacto(id, nuevoNombre, nuevoApellido, nuevoTelefono, nuevaCiudad, nuevaDireccion) {
    for (let i = 0; i < agenda.length; i++) {
       if(agenda[i].id === id){
        agenda[i] = {
            id,
            nombre: nuevoNombre,
            apellido: nuevoApellido,
            telefono: nuevoTelefono,
            ubicacion: {
                ciudad: nuevaCiudad,
                direccion: nuevaDireccion
            }   
        }
       }
    }
}

function mostrarAgenda(){
   for (const contacto of agenda) {
    console.log(contacto)
   }
}  
// console.log(agenda)
// actualizarContacto(2, 'Bob esponja', 'Pantalones Cuadrados', '7895631', 'Fondo de vikini', 'Una piña debajo del mar')
// console.log(agenda)
// eliminarContacto()
// mostrarAgenda()