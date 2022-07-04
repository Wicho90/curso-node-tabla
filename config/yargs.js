const colors = require('colors');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('m', {
        alias: 'maximo',
        type: 'number',
        default: 10,
        describe: 'Es el maximo de numeros a multiplicar por la base'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'.brightRed;
        }
        if (isNaN(argv.m)) {
            throw 'El maximo tiene que ser un numero'.brightRed;
        }
        return true;
    })

.argv;

module.exports = argv;