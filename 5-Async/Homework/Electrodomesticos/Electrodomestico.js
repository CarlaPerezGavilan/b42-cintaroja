class Electrodomestico {
    constructor(precio, color, capacidad){
        this.precio = precio;
        this.color = color;
        this.consumoEnergetico = 100;
        this.capacidad = this.capacidad;
    }
    setConsumoEnerge(cons){
        this.consumoEnergetico=cons;
    }
 
}

module.exports = { 
    Electrodomestico,
};