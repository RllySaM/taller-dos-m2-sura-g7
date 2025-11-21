let usuarios = [
    {id: 1, nombre: "Ana"}, 
    {id: 2, nombre: "Luis"}, 
    {id: 3, nombre: "Carlos"}
];

// 1
let nombres = usuarios.map(usuario => usuario.nombre);

// Mostrar resultados
console.log("Arreglo original de usuarios:", usuarios);
console.log("Arreglo de solo nombres:", nombres);