let productos = [
    {nombre: "Camisa", stock: 10}, 
    {nombre: "Zapatos", stock: 0}, 
    {nombre: "Pantalón", stock: 5}
];

// 1
let enStock = productos.filter(producto => producto.stock > 0);

// Mostrar resultados
console.log("Arreglo original de productos:", productos);
console.log("Arreglo de productos en stock:", enStock);