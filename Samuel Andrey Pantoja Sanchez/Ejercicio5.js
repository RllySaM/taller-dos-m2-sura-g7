let ventas = [150, 300, 100, 50];

// 1
let totalVentas = ventas.reduce((acumulador, ventaActual) => acumulador + ventaActual, 0);

// Mostrar resultados
console.log("Arreglo original de ventas:", ventas);
console.log("Total de ventas:", totalVentas);