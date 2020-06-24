// Elige un pingüino de la lista y crea un objeto
const myPenguin = {
    character: "Frobisher",
    origin: "Doctor Who",
    creator: "Steve Parkhouse",
    notes: "A humanoid from a shape-changing extraterrestial race who prefers to take the guise of a penguin",

    // Imprime el nombre de pingüino en consola
    printWelcome(){
        console.log(`Hola, soy un pingüino y mi nombre es  ${myPenguin.character}`);
    },

};

myPenguin.printWelcome()

// Línea de código que agrega puedevolar
myPenguin.puedeVolar = false
console.log(`Puedo volar ${myPenguin.puedeVolar}`);

// Linea de código para agregar graznar
myPenguin.graznar =  function() {
    console.log("kaww kaww!!")
}
myPenguin.graznar()
