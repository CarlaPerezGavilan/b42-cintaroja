const { Cine } = require('./Cine');
const { Documental } = require('./Documental');
const { Pelicula } = require('./Pelicula');

const cinemex = new Cine('Cinemex reforma');

const documental = new Documental("Icarus", 121, 2017, "Documentary", "English", "EUA");
// reproducir el documental Cosmos
console.log(cinemex.reproducir(documental));

const pelicula = new Pelicula("Onglourious Basterds", 153, 2019, "Movie", "Quentin Tarantino", "Quentin Tarantino");
// reproducir su película Favorita
console.log(cinemex.reproducir(pelicula));