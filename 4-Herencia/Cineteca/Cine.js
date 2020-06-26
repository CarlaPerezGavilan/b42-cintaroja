const { Largometraje } = require('./Largometraje');

class Cine {
    constructor() {

    }
    reproducir(largometraje){
        const {name} = largometraje;
        return `Reproduciendo ${name} en el cine`
    }
}

module.exports = { 
    Cine,
};