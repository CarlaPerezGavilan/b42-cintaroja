const { Largometraje } = require('./Largometraje');


class Pelicula extends Largometraje {
    constructor(name, duration, year, tipo, director, scriptwritter) {
        super(name, duration, year, tipo);
        this.director = director;
        this.scriptwritter = scriptwritter;
    }

    obtenerDuracion(){
        return this.duration;
    }

}

module.exports = { 
    Pelicula,
};