const { Largometraje } = require('./Largometraje');


class Documental extends Largometraje {
    constructor(name, duration, year, tipo, language, countryOrigin) {
        super(name, duration, year, tipo);
        this.language = language;
        this.countryOrigin = countryOrigin;
    }

    obtenerDuracion(){
        return this.duration;
    }
    
    

}

module.exports = { 
    Documental,
};