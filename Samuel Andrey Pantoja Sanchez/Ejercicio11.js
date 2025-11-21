let roles = ["USER", "EDITOR"];

// 1
let tieneAdmin = roles.includes("ADMIN");

// 2
let tieneEditor = roles.includes("EDITOR");

// Mostrar resultados
console.log("Roles del usuario:", roles);
console.log("¿Tiene rol ADMIN?:", tieneAdmin);
console.log("¿Tiene rol EDITOR?:", tieneEditor);