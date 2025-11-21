let feed = ["Noticia 1", "Noticia 2", "Noticia 3"];

// 1
let nuevoFeed = ["Noticia Urgente"].concat(feed);

// Alternativa usando spread operator:
// let nuevoFeed = ["Noticia Urgente", ...feed];

// Mostrar resultados
console.log("Feed original:", feed);
console.log("Nuevo feed:", nuevoFeed);