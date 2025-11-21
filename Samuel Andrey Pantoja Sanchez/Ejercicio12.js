let usuarios = [
    {id: 101, nombre: "Ana"}, 
    {id: 102, nombre: "Luis"}, 
    {id: 103, nombre: "Carlos"}
];

// 1
let usuarioLuis = usuarios.find(usuario => usuario.id === 102);

// Mostrar resultados
console.log("Lista completa de usuarios:", usuarios);
console.log("Usuario con id 102:", usuarioLuis);