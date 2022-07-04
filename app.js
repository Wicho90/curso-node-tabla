const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js')

console.clear();

console.log(argv);


crearArchivo(argv.b, argv.m, argv.l)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));