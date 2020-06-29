const { Bebida } = require('./Bebida');

class Refresco extends Bebida {
    constructor(cantidad, azucar){
        super(cantidad);
        this.azucar = azucar;
    }

    getAzucar(){
        return this.azucar;
    }
    setAzucar(newAzucar){
        this.azucar = newAzucar;
    }
}

module.exports = { 
    Refresco,
};