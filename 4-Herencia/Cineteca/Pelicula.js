const { Largometraje } = require('./Largometraje');


class Pelicula extends Largometraje {
    constructor(name, duration, year, tipo, director, scriptwritter) {
        super(name, duration, year, tipo);
        this.director = director;
        this.scriptwritter = scriptwritter;
        this.rating = 'A';
    }

    changeRating(rating){
        this.rating = rating;
        return `Changed rating to: ${this.rating}`;
    }

}

module.exports = { 
    Pelicula,
};