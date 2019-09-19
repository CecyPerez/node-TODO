// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const TODO = require('./por-hacer/por-hacer');
var colors = require('colors');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = TODO.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = TODO.getListado();
        for (const tarea of listado) {
            console.log('========TODO==========='.green);
            console.log(tarea.descripcion);
            console.log("Estado:", tarea.completado);
            console.log('======================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = TODO.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = TODO.borrar(argv.descripcion);
        console.log(borrado);
        break;


    default:
        console.log('Comando no reconocido');
        break;
}