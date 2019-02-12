const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');


const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).
        then(archivo => {
            console.log(`El archivo ${archivo} ha sido creadp`);

        }).catch((err) => {
            console.log(err);
        });
        break;

    default:
        console.log('comando no reconocido');
}


console.log('Limite ', argv.limite);

//let base = 'f';

// console.log(multiplicar);

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
//     // esto es solo un ejemplo para hacerlo ya que con yargs se puede hacer mas rapido