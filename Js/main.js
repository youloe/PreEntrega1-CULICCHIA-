function validarNota(nota) {
  if (nota >= 0 && nota <= 100) {
      return true; 
  } else {
      return false; 
  }
}


function calcularPromedio(suma, cantidad) {
  return suma / cantidad;
}

let cantidadAlumnos = parseInt(prompt("¿Cuántos alumnos vas a ingresar?"));

let sumaNotas = 0;

for (let i = 1; i <= cantidadAlumnos; i++) {
  let nota = parseFloat(prompt("Ingresa la calificación del estudiante " + i + ":"));

  
  while (!validarNota(nota)) {
      nota = parseFloat(prompt("Nota inválida. Ingresa una nota válida para el estudiante " + i + " (entre 0 y 100):"));
  }

  sumaNotas += nota;
}

let promedio = calcularPromedio(sumaNotas, cantidadAlumnos);

console.log("La nota final promedio de los estudiantes es: " + promedio.toFixed(2));