const { Cine } = require('./Cine');
const { Documental } = require('./Documental');
const { Pelicula } = require('./Pelicula');
const { Largometraje } = require('./Largometraje');


const cinemex = new Cine("Cinemex");
const cinepolis = new Cine("Cinepolis");


const documental = new Documental("Icarus", 121, 2017, "Documentary", "English", "EUA");
// reproducir el documental Cosmos
console.log(cinemex.reproducir(documental));
console.log(documental.obtenerDuracion());
console.log(documental.store());


const pelicula = new Pelicula("Inglourious Basterds", 153, 2019, "Movie", "Quentin Tarantino", "Quentin Tarantino");
// reproducir su película Favorita
console.log(cinemex.reproducir(pelicula));
console.log(pelicula.changeRating('R'));
console.log(pelicula.store());

const largometraje = new Largometraje("Prueba", 120, 2000);

console.log(cinepolis.reproducir(largometraje));