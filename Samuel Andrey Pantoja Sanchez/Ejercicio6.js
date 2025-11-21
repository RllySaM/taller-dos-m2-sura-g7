let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];

// 1
let listaPlana = grupos.reduce((acumulador, grupoActual) => acumulador.concat(grupoActual), []);

// Mostrar resultados
console.log("Arreglo original de grupos:", grupos);
console.log("Arreglo aplanado:", listaPlana);