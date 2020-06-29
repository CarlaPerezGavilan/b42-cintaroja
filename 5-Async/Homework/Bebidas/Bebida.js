class Bebida {
    constructor(cantidad){
        this.cantidad = cantidad;
    }
    getCantidad(){
        return this.cantidad;
    }
    setCantidad(newCantidad){
        this.cantidad = newCantidad;
    }
}

module.exports = { 
    Bebida,
};