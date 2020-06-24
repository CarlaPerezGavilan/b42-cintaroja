const myPenguin = {
    character: "Frobisher",
    origin: "Doctor Who",
    creator: "Steve Parkhouse",
    notes: "A humanoid from a shape-changing extraterrestial race who prefers to take the guise of a penguin",

    printWelcome(){
        console.log(`Hola, soy un pingüino y mi nombre es  ${myPenguin.character}`);
    },

};

myPenguin.printWelcome()
myPenguin.puedeVolar = true
console.log(`Puedo volar ${myPenguin.puedeVolar}`);
myPenguin.graznar =  function() {
    console.log("kaww kaww!!")
}
myPenguin.graznar()
