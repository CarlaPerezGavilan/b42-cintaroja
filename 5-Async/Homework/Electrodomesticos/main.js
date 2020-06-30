const { Electrodomestico } = require('./Electrodomestico');
const { Lavadora } = require('./Lavadora');

// Pruebas
const lavador = new Lavadora(1200, "azul", 100, 20);
console.log(`Este es el precio final al multiplicar ${lavador.consumoEnergetico} por ${lavador.carga} y obtienes ${lavador.precioFinal()}`);