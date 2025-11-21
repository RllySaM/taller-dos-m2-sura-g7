let fila = ["Ana", "Luis", "Carlos", "Maria"];

// 1
let filaConJorge = [...fila.slice(0, 1), "Jorge", ...fila.slice(1)];

// Mostrar resultados
console.log("Fila original:", fila);
console.log("Fila con Jorge:", filaConJorge);