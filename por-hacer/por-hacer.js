const fs = require('fs');
const colors = require('colors/safe');

let listadoToMake = [];

const save = () => {
  let data = JSON.stringify(listadoToMake);

  fs.writeFile(`database/data.json`, data, (err) => {
	  if (err)
      throw new Error('No fue posible guardar',err);
  });
}

const loadData = () => {
  try{
    listadoToMake = require('../database/data.json');
  }catch(error){
    listadoToMake = [];
  }
}

const show = () => {
  loadData();
  console.log(colors.green('======= Por hacer ======='));
  for(let tarea of listadoToMake){
    console.log(`Actividad: ${tarea.descripcion}`);
    console.log(`Estado:    ${tarea.estado}`);
    console.log(colors.white('_________________________'));
  }
  console.log(colors.green('========================='));
}

const make = descripcion => {
  let porHacer = {
    descripcion,
    estado: false
  }
  loadData();
  listadoToMake.push(porHacer);
  save();
  return porHacer;
}

const update = (descripcion, estado = true) =>{
  loadData();
  let index = listadoToMake.findIndex(tarea => tarea.descripcion === descripcion);
  if(index >= 0){
    listadoToMake[index].estado = estado;
    save();
    return "Se ha actualizado el estado de la actividad.";
  }
  else
    return "No se ha encontrado la actividad.";

}

const eliminar = descripcion => {
  loadData();
  let lista = listadoToMake.filter(tarea => tarea.descripcion !== descripcion);

  if(lista.length === listadoToMake.length)
    return "No fue posible borrar la actividad.";
  else {
    listadoToMake = lista;
    save();
    return "Se ha eliminado la actividad.";
  }
}



module.exports = {
  make,
  show,
  update,
  eliminar
}
