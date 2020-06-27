function printingFunction(callback, message){
    callback(message);
}

printingFunction
( 
    yourMessage => 
    { 
        console.info(yourMessage); 
    }, "Este es mi mensaje"
);
