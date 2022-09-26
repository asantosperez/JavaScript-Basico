const AlbertoSantos = {
    nombre: "Alberto",
    primer_apellido: "Santos",
    segundo_apellido: "Pérez",
    edad: 34,
    es_Desarrollador: false,
    fecha_nacimiento: newDate(1988, 10, 10),
    libro_favorito: {
        titulo: "El señor de los anillos: El retorno del rey",
        autor: "J R R Tolkien",
        fecha: 1955,
        url: "https://es.wikipedia.org/wiki/El_retorno_del_Rey"
    }
}

const lista = [
    AlbertoSantos.nombre, 
    AlbertoSantos.edad, 
    AlbertoSantos.es_Desarrollador, 
    AlbertoSantos.fecha_nacimiento,
    AlbertoSantos.libro_favorito
];

console.log(AlbertoSantos);
console.log(lista);
