let agenda = ['Danna Medina','Jose Forero','Lizeth Colón','Noelia Forero','Hans Forero']

function nuevoContacto(contacto){
    agenda.push(contacto)
}

nuevoContacto('Aegon Targaryen')

console.log(agenda)

function borrarContacto(contacto){
    let nuevaAgenda = agenda.filter((persona) => contacto !== persona )
    agenda = nuevaAgenda;
}
borrarContacto('Hans Forero')
console.log(agenda)

function mostrarAgenda(){
    agenda.sort();
    for (const contacto of agenda) {
        console.log(contacto);
    } 
}  

console.log(mostrarAgenda())
