let tablero = ["X", "O", "X"];

// 1
let nuevoTablero = tablero.map((elemento, indice) => 
    indice === 1 ? "X" : elemento
);

// Mostrar resultados
console.log("Tablero original:", tablero);
console.log("Nuevo tablero:", nuevoTablero);