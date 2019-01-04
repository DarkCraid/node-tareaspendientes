const descripcion = {
  demand:true,
  alias:'d',
  desc:'Descripcion de la tarea'
}

const argv = require('yargs')
  .command('make','Crea una nueva tarea.',{
    descripcion
  })
  .command('update','Actualiza el estado de una tarea existente.',{
    descripcion,
    completado:{
      alias:'c',
      default:true,
      desc:'Marca como completada o pendiente una tarea'
    }
  })
  .command('delete', 'Elimina una tarea de la lista.',{
    descripcion
  })
  .command('show','Muestra todas las tareas.',{})
  .help().argv;

module.exports = {
  argv
}
