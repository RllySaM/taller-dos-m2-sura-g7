let productos = [
    {nombre: "Papas", precio: 2}, 
    {nombre: "Carne", precio: 15}, 
    {nombre: "Leche", precio: 3}
];

// 1
let productosCaros = productos
    .filter(producto => producto.precio > 4)
    .map(producto => producto.nombre);

// Mostrar resultados
console.log("Lista completa de productos:", productos);
console.log("Nombres de productos caros (>4):", productosCaros);