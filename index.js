const opcion = process.argv[2];
const parametro = process.argv[3];

switch (opcion) {
  case "ls":
    console.log("Listar koders");
    break;
  case "add":
    console.log("Agregar koder:", parametro);
    break;
  case "reset":
    console.log("Resetear koders");
    break;
  case "rm":
    console.log("Eliminar koder:", parametro);
    break;
  default:
    console.log("Instrucción no válida");
};
