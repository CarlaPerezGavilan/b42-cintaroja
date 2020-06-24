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


//TAREA

//5. Agregar saludar
myPenguin.saludar =  function() {
    console.log(`Hola, soy un pingüino y mi nombre es  ${myPenguin.character}`);
}

//6. Cambiar a señor pengui
myPenguin.character = "Señor Pengui";
console.log(`Mi nombre ${myPenguin.character}`);

//7. Método volar
myPenguin.volar =  function() {
    if(myPenguin.puedeVolar === true){
        console.log("¡Puedo Volar!");
    }else{
        console.log("No puedo volar :(");
    }
}
myPenguin.volar();

//8. Método volar
myPenguin.puedeVolar = true
myPenguin.volar();


