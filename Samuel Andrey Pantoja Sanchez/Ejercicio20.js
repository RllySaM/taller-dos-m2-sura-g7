let puntuaciones = [50, 85, -10, 100, 0, 30];

// 1
let validas = puntuaciones.filter(puntuacion => puntuacion >= 0);

// 2
let bonificadas = validas.map(puntuacion => puntuacion + 10);

// 3
let totalPuntos = bonificadas.reduce((acumulador, puntuacion) => acumulador + puntuacion, 0);

// Mostrar resultados paso a paso
console.log("Puntuaciones originales:", puntuaciones);
console.log("Puntuaciones válidas (>=0):", validas);
console.log("Puntuaciones bonificadas (+10):", bonificadas);
console.log("Total de puntos:", totalPuntos);

// Versión encadenada en una sola línea:
let totalPuntosEncadenado = puntuaciones
    .filter(p => p >= 0)
    .map(p => p + 10)
    .reduce((acc, p) => acc + p, 0);

console.log("Total (encadenado):", totalPuntosEncadenado);