const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Le asigna una descripción a la tarea'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'Borra una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}