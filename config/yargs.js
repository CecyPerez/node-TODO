const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true
}


const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea en TODO', { descripcion })
    .command('actualizar', 'Actualiza una tarea en TODO', { descripcion, completado })
    .command('borrar', 'Borra una tarea del TODO', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}