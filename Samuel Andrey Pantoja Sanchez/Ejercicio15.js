let fila = ["Ana", "Luis", "Carlos", "Maria"];

// 1
let nuevaFila = fila.filter(persona => persona !== "Luis");

// Alternativa usando índice:
// let nuevaFila = fila.filter((persona, indice) => indice !== 1);

// 2
console.log("Fila original:", fila);
console.log("Nueva fila sin Luis:", nuevaFila);