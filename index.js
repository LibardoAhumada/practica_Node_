const opcion = process.argv[2];
const parametro = process.argv[3];
const fs = require("fs");
const contentKoders = fs.readFileSync('./namesOfkoders.json', 'utf8');
const contentAsObject = JSON.parse(contentKoders);

switch (opcion) {
  case "ls":
    console.log("Listar koders: ");
    listarKoders(contentAsObject);
    break;
  case "add":
    console.log("Agregar koder:", parametro);
    agregarKoder(contentAsObject, parametro);
    break;
  case "reset":
    console.log("Resetear koders");
    resetTodoArray(contentAsObject);
    break;
  case "rm":
    console.log("Eliminar koder:", parametro);
    borrarKoder(contentAsObject, parametro);
    break;
  default:
    console.log("Instrucción no válida");
}

function listarKoders(contentAsObject) {
  contentAsObject.forEach(koder => {
    console.log(koder);
  });
}

function agregarKoder(contentAsObject, nombreKoder) {
  contentAsObject.push({ nombre: nombreKoder });
  fs.writeFileSync('./namesOfkoders.json', JSON.stringify(contentAsObject), 'utf-8');
  console.log(contentAsObject);
}

function borrarKoder(contentAsObject, nombreKoder) {
  const index = contentAsObject.findIndex(koder => koder.nombre === nombreKoder);
  if (index !== -1) {
    contentAsObject.splice(index, 1);
    console.log(`Koder ${nombreKoder} eliminado`);
  } else {
    console.log(`Koder ${nombreKoder} no encontrado`);
  }
  fs.writeFileSync('./namesOfkoders.json', JSON.stringify(contentAsObject), 'utf-8');
}

function resetTodoArray(contentAsObject) {
  contentAsObject.length = 0;
  fs.writeFileSync('./namesOfkoders.json', JSON.stringify(contentAsObject), 'utf-8');
  console.log("Array reseteado");
}
