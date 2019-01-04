const argv = require('./config/yargs').argv;

const toDo = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch(comando){
  case "make":
    let tarea = toDo.make(argv.descripcion);
    console.log(tarea);
    break;
  case "show":
    toDo.show();
    break;
  case "update":
    toDo.update(argv.descripcion,argv.completado);
    break;
  case "delete":
    console.log(toDo.eliminar(argv.descripcion));
    break;
  default:
    console.log('el comando no es reconocido.');
    break;
}
