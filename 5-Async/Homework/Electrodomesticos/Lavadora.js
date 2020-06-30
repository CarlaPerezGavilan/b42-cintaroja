const { Electrodomestico } = require('./Electrodomestico');

class Lavadora extends Electrodomestico {
    constructor(precio, color, capacidad, carga){
        super(precio, color, capacidad);
        this.carga = carga;
    }

    precioFinal(){
        return super.consumoEnergetico*this.carga;
    }
}

module.exports = { 
    Lavadora,
};