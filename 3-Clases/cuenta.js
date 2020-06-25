

class Cuenta{
    constructor(titular, cantidad, estado){
        if(cantidad > 90 || cantidad < 10){
           console.log("No se pudo crear cuenta ");
           return;
        }
        this.titular = titular;
        this.cantidad = cantidad;
        this.estado = estado;
        console.log("Cuenta creada exitosamente");
    };
    ingresar(monto){
        if(this.cantidad + monto > 900){
            console.log("cantidad a ingresar inválida")
        }
        this.cantidad += monto;
    };
    retirar(monto){
        if(this.cantidad - monto < 10){
            console.log("cantidad a retirar inválida")

        }
        this.cantidad -= monto;
    };
    consulta(){
        console.log(`titular :${this.titular}`)
        console.log(`cantidad :${this.cantidad}`)
        console.log(`estado :${this.estado} \n`)
    }
}

// Pruebas 
const miCuenta = new Cuenta("Carla", 30, "abierta")
//con cuentas muy grandes o muy chicas
const cuentaGrande = new Cuenta("Jorge", 1000, "abierta")
const cuentaChica = new Cuenta("Paula", 5, "abierta")

// cuando se retiran o ingresan cantidades válidas
console.log("PRUEBAS 1 ")
miCuenta.ingresar(100);
miCuenta.consulta();
miCuenta.retirar(10);
miCuenta.consulta();

// cuando se retiran o ingresan cantidades no válidas
console.log("PRUEBAS 2 ")
miCuenta.ingresar(900);
miCuenta.consulta();
miCuenta.retirar(1000);
miCuenta.consulta();

