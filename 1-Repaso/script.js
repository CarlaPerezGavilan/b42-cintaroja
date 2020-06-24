/*
Tipos de Datos
Tipado debilmente: var no te da información menos que es una variable 
object: Objeto {}
number: 
*/

/* contexto global : scope */
var numero = 1;
console.log("ahhh");

/*Hoisting = pasar las declaraciones al inicio*/

/*ECMA Script 6*/
//asignar un valor a una variable que se puede reasignar  
let nombreL = '';
nombreL = 'Mali';

//no se puede reasignar  
const nombreC = {
    nombre: 'Mali'
};

nombreC.nombre = 'Edwin'

console.log(nombreC, nombreL)
const mascota = ['Rayas', 'Mocka', 'Cosa'];
mascota.push('Paloma')
console.log(mascota)

/* Navegador se encarga de montar toda la inf, y por lo tanto tienes mucho mejor control de recursos */