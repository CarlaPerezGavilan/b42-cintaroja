const { Bebida } = require('./Bebida');

class Cerveza extends Bebida {
    constructor(cantidad, porcentajeAlcohol){
        super(cantidad);
        this.porcentajeAlcohol = porcentajeAlcohol;
    }

    getPorcentajeAlcohol(){
        return this.porcentajeAlcohol;
    }
    setPorcentajeAlcohol(newPorcentaje){
        this.porcentajeAlcohol = newPorcentaje;
    }
}

module.exports = { 
    Cerveza,
};