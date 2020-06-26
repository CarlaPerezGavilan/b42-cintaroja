const { Largometraje } = require('./Largometraje');

class Cine {
    constructor(name) {
        this.name = name;
    }
    reproducir(largometraje){
        const {name} = largometraje;
        return `Reproduciendo ${name} en el cine ${this.name}`
    }
}

module.exports = { 
    Cine,
};